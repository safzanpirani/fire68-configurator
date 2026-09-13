// Renderer. Talks only to the preload bridge, never to the device directly.

const $ = (id) => document.getElementById(id);

/// Travel is stored in hundredths of a millimetre.
const mm = (raw) => (raw / 100).toFixed(2);

/// Measured full travel on the reference board.
const FULL_TRAVEL = 350;
/// Factory actuation point, used to mark keys that have been changed.
const STOCK_POINT = 150;

// --------------------------------------------------------------- key layout
//
// The physical FIRE68 is a 65% board: five rows, each exactly 16 units wide.
// Each entry carries the code the device reports for that key, so positions
// are matched against the live key matrix rather than assumed.
//
// Codes below 0x100 are HID keyboard usages. Codes at or above 0x100 are
// modifier bitmasks shifted left by eight, which is how this firmware encodes
// Ctrl, Shift, Alt and Win. `fn` is the separate function-action class.

const K = (code, label, w) => ({ code, label, w: w || 1 });
const FN = (label, w) => ({ fn: true, label, w: w || 1 });

const LAYOUT = [
  [
    K(0x29, 'Esc'), K(0x1e, '1'), K(0x1f, '2'), K(0x20, '3'), K(0x21, '4'),
    K(0x22, '5'), K(0x23, '6'), K(0x24, '7'), K(0x25, '8'), K(0x26, '9'),
    K(0x27, '0'), K(0x2d, '-'), K(0x2e, '='), K(0x2a, 'Bksp', 2), K(0x4c, 'Del'),
  ],
  [
    K(0x2b, 'Tab', 1.5), K(0x14, 'Q'), K(0x1a, 'W'), K(0x08, 'E'), K(0x15, 'R'),
    K(0x17, 'T'), K(0x1c, 'Y'), K(0x18, 'U'), K(0x0c, 'I'), K(0x12, 'O'),
    K(0x13, 'P'), K(0x2f, '['), K(0x30, ']'), K(0x31, '\\', 1.5), K(0x49, 'Ins'),
  ],
  [
    K(0x39, 'Caps', 1.75), K(0x04, 'A'), K(0x16, 'S'), K(0x07, 'D'), K(0x09, 'F'),
    K(0x0a, 'G'), K(0x0b, 'H'), K(0x0d, 'J'), K(0x0e, 'K'), K(0x0f, 'L'),
    K(0x33, ';'), K(0x34, "'"), K(0x28, 'Enter', 2.25), K(0x46, 'PrtSc'),
  ],
  [
    K(0x0200, 'Shift', 2.25), K(0x1d, 'Z'), K(0x1b, 'X'), K(0x06, 'C'), K(0x19, 'V'),
    K(0x05, 'B'), K(0x11, 'N'), K(0x10, 'M'), K(0x36, ','), K(0x37, '.'),
    K(0x38, '/'), K(0x2000, 'Shift', 1.75), K(0x52, '↑'), K(0x47, 'ScrLk'),
  ],
  [
    K(0x0100, 'Ctrl', 1.25), K(0x0800, 'Win', 1.25), K(0x0400, 'Alt', 1.25),
    K(0x2c, 'Space', 6.25), K(0x4000, 'Alt'), FN('Fn'), K(0x1000, 'Ctrl'),
    K(0x50, '←'), K(0x51, '↓'), K(0x4f, '→'),
  ],
];

// ------------------------------------------------------------------- state

let bySlot = new Map();   // slot -> { name, code, cls, travel }
let byCode = new Map();   // device code -> slot
let fnSlot = null;
let selected = null;
let bound = new Set();    // slots bound in the gamepad config
let peak = 0;
let liveOn = false;

// -------------------------------------------------------------------- theme

const savedTheme = (() => {
  try { return localStorage.getItem('theme'); } catch { return null; }
})();
applyTheme(savedTheme || 'dark');

function applyTheme(t) {
  document.documentElement.dataset.theme = t;
  $('theme').textContent = t === 'dark' ? 'Light' : 'Dark';
  try { localStorage.setItem('theme', t); } catch { /* private mode */ }
}
$('theme').onclick = () =>
  applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');

// --------------------------------------------------------------- navigation

document.querySelectorAll('nav button').forEach((b) => {
  b.onclick = () => {
    document.querySelectorAll('nav button').forEach((x) => x.classList.remove('active'));
    document.querySelectorAll('.view').forEach((x) => x.classList.remove('active'));
    b.classList.add('active');
    $(`view-${b.dataset.view}`).classList.add('active');
  };
});

// ------------------------------------------------------------------- load

async function load() {
  $('binpath').textContent = await window.fire68.binaryPath();
  $('cfgdir').textContent = await window.fire68.configDir();

  const info = await window.fire68.info();
  if (!info.ok) {
    $('fw').textContent = 'no device';
    setMsg('keymsg', info.error, 'err');
    return;
  }
  $('fw').textContent = info.firmware;
  $('d-fw').textContent = info.firmware;
  $('d-mode').textContent = info.lighting_mode;
  $('d-bright').textContent = info.brightness;
  $('d-rate').textContent = info.report_rate_hz ? `${info.report_rate_hz} Hz` : `unknown (raw ${info.report_rate_raw})`;
  $('dbg').textContent = info.debug_mode ? 'on' : 'off';

  const [km, tv] = await Promise.all([window.fire68.keymap(), window.fire68.travel()]);
  if (!km.ok || !tv.ok) {
    setMsg('keymsg', km.error || tv.error, 'err');
    return;
  }

  const travelBySlot = new Map(tv.keys.map((k) => [k.slot, k.travel]));
  bySlot = new Map();
  byCode = new Map();
  fnSlot = null;

  for (const k of km.keys) {
    // 0xffff marks an unused matrix position.
    if (k.code === 0xffff) continue;
    bySlot.set(k.slot, {
      name: k.name,
      code: k.code,
      cls: k.class,
      travel: travelBySlot.get(k.slot) || null,
    });
    if (k.class === 0xf0) fnSlot = k.slot;
    else if (!byCode.has(k.code)) byCode.set(k.code, k.slot);
  }

  $('keycount').textContent = bySlot.size;
  renderBoard();
}

// --------------------------------------------------------------- the board

function renderBoard() {
  const board = $('board');
  board.innerHTML = '';
  const placed = new Set();

  for (const row of LAYOUT) {
    const r = document.createElement('div');
    r.className = 'krow';
    for (const spec of row) {
      const slot = spec.fn ? fnSlot : byCode.get(spec.code);
      const el = document.createElement('div');
      el.className = 'k';
      el.style.width = `calc(${spec.w} * var(--u) + ${spec.w - 1} * var(--gap))`;

      if (slot === undefined || slot === null) {
        el.classList.add('unmapped');
        el.innerHTML = `<div class="lbl">${esc(spec.label)}</div>`;
      } else {
        placed.add(slot);
        const info = bySlot.get(slot);
        const pt = info && info.travel ? mm(info.travel.point) : '';
        if (slot === selected) el.classList.add('sel');
        if (bound.has(slot)) el.classList.add('bound');
        if (info && info.travel && info.travel.point !== STOCK_POINT) el.classList.add('tuned');
        el.dataset.slot = slot;
        el.innerHTML =
          `<i class="fill" id="fill-${slot}"></i>` +
          `<div class="lbl">${esc(spec.label)}</div>` +
          `<div class="sub">${pt}</div>`;
        el.onclick = () => select(slot);
      }
      r.appendChild(el);
    }
    board.appendChild(r);
  }

  // Anything the device reports but the layout has no position for.
  const extra = [...bySlot.keys()].filter((s) => !placed.has(s));
  $('unplaced').textContent = extra.length
    ? `Not shown on the layout: ${extra.map((s) => `slot ${s} (${bySlot.get(s).name})`).join(', ')}`
    : '';
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function select(slot) {
  const info = bySlot.get(slot);
  if (!info || !info.travel) return;
  selected = slot;
  $('editor').classList.add('show');
  $('pickhint').style.display = 'none';
  $('edslot').textContent = slot;
  $('edname').textContent = info.name;
  setSlider('point', info.travel.point);
  setSlider('prt', info.travel.press_rt);
  setSlider('rrt', info.travel.release_rt);
  setMsg('keymsg', '');
  renderBoard();
}

function setSlider(id, v) {
  $(id).value = v;
  $(`${id}v`).textContent = `${mm(v)} mm`;
}
for (const id of ['point', 'prt', 'rrt']) {
  $(id).oninput = () => { $(`${id}v`).textContent = `${mm($(id).value)} mm`; };
}

// ------------------------------------------------------------- key writes

$('apply').onclick = async () => {
  if (selected === null) return;
  $('apply').disabled = true;
  setMsg('keymsg', 'writing…');
  const res = await window.fire68.setTravel({
    slot: selected,
    point: Number($('point').value),
    pressRt: Number($('prt').value),
    releaseRt: Number($('rrt').value),
  });
  $('apply').disabled = false;

  if (!res.ok) { setMsg('keymsg', res.error, 'err'); return; }
  if (!res.written) { setMsg('keymsg', 'already set', 'ok'); return; }

  bySlot.get(selected).travel = res.after;
  renderBoard();
  setMsg('keymsg', `written · ${mm(res.before.point)} → ${mm(res.after.point)} mm`, 'ok');
};

$('stock').onclick = () => {
  setSlider('point', 150);
  setSlider('prt', 29);
  setSlider('rrt', 29);
};

// ------------------------------------------------------------ live travel

$('live').onclick = async () => {
  liveOn = !liveOn;
  $('live').setAttribute('aria-pressed', String(liveOn));
  $('live').textContent = liveOn ? 'Stop live travel' : 'Show live travel';
  if (liveOn) {
    peak = 0;
    $('peak').textContent = '—';
    setMsg('livemsg', 'press keys');
    await window.fire68.startMonitor();
  } else {
    await window.fire68.stopStream();
    setMsg('livemsg', '');
    document.querySelectorAll('.fill').forEach((f) => { f.style.height = '0'; });
  }
};

window.fire68.onMonitor((d) => {
  if (d.event === 'error') { setMsg('livemsg', d.error, 'err'); return; }
  if (d.event === 'stopped') { setMsg('livemsg', ''); return; }
  if (d.slot === undefined) return;

  if (d.raw > peak) {
    peak = d.raw;
    $('peak').textContent = `${mm(peak)} mm`;
  }
  const fill = $(`fill-${d.slot}`);
  if (fill) {
    fill.style.height = `${Math.min(100, (d.raw / FULL_TRAVEL) * 100)}%`;
  }
});

// ---------------------------------------------------------------- gamepad

$('padinit').onclick = async () => {
  setMsg('padmsg', 'reading key matrix…');
  const res = await window.fire68.initGamepad($('cfgpath').value.trim() || 'gamepad.json');
  if (!res.ok) { setMsg('padmsg', res.error, 'err'); return; }
  const missing = (res.missing || []).length ? `, missing ${res.missing.join(', ')}` : '';
  setMsg('padmsg', `created with ${res.bindings} bindings${missing}`, 'ok');
};

$('padstart').onclick = async () => {
  setMsg('padmsg', 'starting…');
  await window.fire68.startGamepad($('cfgpath').value.trim() || 'gamepad.json');
};
$('padstop').onclick = async () => {
  await window.fire68.stopStream();
  setMsg('padmsg', 'stopped');
};

window.fire68.onGamepad((d) => {
  if (d.event === 'error' || d.ok === false) {
    setMsg('padmsg', d.error || 'failed', 'err');
    return;
  }
  if (d.event === 'started') { setMsg('padmsg', `live · ${d.bindings} bindings`, 'ok'); return; }
  if (d.event === 'stopped') { setMsg('padmsg', 'stopped'); return; }
  if (d.event !== 'axes') return;

  stick('lx', d.lx); stick('ly', d.ly);
  stick('rx', d.rx); stick('ry', d.ry);
  trig('lt', d.lt); trig('rt', d.rt);
});

/// Sticks are signed, so they grow outward from the centre line.
function stick(id, v) {
  const f = Math.max(-1, Math.min(1, v / 32767));
  const el = $(id);
  if (f >= 0) { el.style.left = '50%'; el.style.width = `${f * 50}%`; }
  else { el.style.left = `${50 + f * 50}%`; el.style.width = `${-f * 50}%`; }
  $(`${id}v`).textContent = v;
}
function trig(id, v) {
  const el = $(id);
  el.style.left = '0';
  el.style.width = `${(v / 255) * 100}%`;
  $(`${id}v`).textContent = v;
}

// ----------------------------------------------------------------- device

$('dbgon').onclick = () => toggleDebug(true);
$('dbgoff').onclick = () => toggleDebug(false);

async function toggleDebug(on) {
  setMsg('dbgmsg', 'writing…');
  const res = await window.fire68.setDebug(on);
  if (!res.ok) { setMsg('dbgmsg', res.error, 'err'); return; }
  $('dbg').textContent = on ? 'on' : 'off';
  $('dbgmsg').innerHTML = `currently <b id="dbg">${on ? 'on' : 'off'}</b>`;
  $('dbgmsg').className = 'msg ok';
}

$('verify').onclick = async () => {
  setMsg('vermsg', 'reading…');
  const res = await window.fire68.verifyEncoding();
  setMsg(
    'vermsg',
    res.ok ? `lossless across ${res.bytes} bytes` : `mismatch at ${res.mismatches} bytes`,
    res.ok ? 'ok' : 'err'
  );
};

$('refresh').onclick = load;

function setMsg(id, text, cls) {
  const el = $(id);
  el.textContent = text;
  el.className = `msg ${cls || ''}`;
}

load();
