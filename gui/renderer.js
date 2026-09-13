// Renderer. Talks only to the preload bridge, never to the device directly.

const $ = (id) => document.getElementById(id);

/// Raw travel units are hundredths of a millimetre.
const MM = (raw) => (raw / 100).toFixed(2);

let keys = [];        // [{ slot, name, travel }]
let selected = null;  // slot index
let peak = 0;

// ---------------------------------------------------------------- navigation

document.querySelectorAll('nav button').forEach((b) => {
  b.onclick = () => {
    document.querySelectorAll('nav button').forEach((x) => x.classList.remove('active'));
    document.querySelectorAll('.view').forEach((x) => x.classList.remove('active'));
    b.classList.add('active');
    $(`view-${b.dataset.view}`).classList.add('active');
  };
});

// ---------------------------------------------------------------- load state

async function load() {
  $('binpath').textContent = await window.fire68.binaryPath();

  const info = await window.fire68.info();
  if (!info.ok) {
    setMsg('keymsg', info.error, 'err');
    $('fw').textContent = 'not found';
    return;
  }
  $('fw').textContent = info.firmware;
  $('bright').textContent = info.brightness;
  $('dbg').textContent = info.debug_mode ? 'on' : 'off';
  $('dbgdot').className = `dot ${info.debug_mode ? 'on' : 'off'}`;

  const [km, tv] = await Promise.all([window.fire68.keymap(), window.fire68.travel()]);
  if (!km.ok || !tv.ok) {
    setMsg('keymsg', (km.error || tv.error), 'err');
    return;
  }

  const travelBySlot = new Map(tv.keys.map((k) => [k.slot, k.travel]));
  keys = km.keys.map((k) => ({
    slot: k.slot,
    name: k.name,
    travel: travelBySlot.get(k.slot) || null,
  }));
  renderGrid();
}

function renderGrid() {
  const grid = $('keygrid');
  grid.innerHTML = '';
  for (const k of keys) {
    const el = document.createElement('div');
    el.className = 'key' + (k.slot === selected ? ' sel' : '');
    el.dataset.slot = k.slot;
    const pt = k.travel ? MM(k.travel.point) : '—';
    el.innerHTML = `
      <div class="name">${escapeHtml(k.name)}</div>
      <div class="pt">${pt} mm</div>
      <div class="bar"><i id="livebar-${k.slot}"></i></div>`;
    el.onclick = () => select(k.slot);
    grid.appendChild(el);
  }
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function select(slot) {
  selected = slot;
  const k = keys.find((x) => x.slot === slot);
  if (!k || !k.travel) return;
  $('editor').style.display = 'block';
  $('edslot').textContent = slot;
  $('edname').textContent = k.name;
  setSlider('point', k.travel.point);
  setSlider('prt', k.travel.press_rt);
  setSlider('rrt', k.travel.release_rt);
  setMsg('keymsg', '', '');
  renderGrid();
}

function setSlider(id, value) {
  $(id).value = value;
  $(`${id}v`).textContent = `${MM(value)} mm`;
}

for (const id of ['point', 'prt', 'rrt']) {
  $(id).oninput = () => { $(`${id}v`).textContent = `${MM($(id).value)} mm`; };
}

// ---------------------------------------------------------------- key writes

$('apply').onclick = async () => {
  if (selected === null) return;
  $('apply').disabled = true;
  setMsg('keymsg', 'Writing…', 'warn');
  const res = await window.fire68.setTravel({
    slot: selected,
    point: Number($('point').value),
    pressRt: Number($('prt').value),
    releaseRt: Number($('rrt').value),
  });
  $('apply').disabled = false;

  if (!res.ok) {
    setMsg('keymsg', res.error, 'err');
    return;
  }
  if (!res.written) {
    setMsg('keymsg', 'Already at those values; nothing written.', 'ok');
    return;
  }
  const k = keys.find((x) => x.slot === selected);
  k.travel = res.after;
  renderGrid();
  setMsg(
    'keymsg',
    `Written. Actuation ${MM(res.before.point)} mm to ${MM(res.after.point)} mm.`,
    'ok'
  );
};

$('revert').onclick = () => {
  setSlider('point', 150);
  setSlider('prt', 29);
  setSlider('rrt', 29);
};

// ---------------------------------------------------------------- monitor

$('monstart').onclick = async () => {
  peak = 0;
  $('peak').textContent = '—';
  $('montable').innerHTML = '';
  setMsg('monmsg', 'Monitoring. Press keys.', 'ok');
  await window.fire68.startMonitor();
};
$('monstop').onclick = async () => {
  await window.fire68.stopStream();
  setMsg('monmsg', 'Stopped.', '');
};

const liveRows = new Map();

window.fire68.onMonitor((d) => {
  if (d.event === 'error') { setMsg('monmsg', d.error, 'err'); return; }
  if (d.event === 'stopped') { setMsg('monmsg', 'Stopped.', ''); return; }
  if (d.slot === undefined) return;

  if (d.raw > peak) {
    peak = d.raw;
    $('peak').textContent = `${peak} (${MM(peak)} mm)`;
  }

  const key = keys.find((k) => k.slot === d.slot);
  const name = key ? key.name : '?';
  let row = liveRows.get(d.slot);
  if (!row) {
    row = document.createElement('tr');
    row.innerHTML = `<td>${d.slot}</td><td>${escapeHtml(name)}</td>
      <td class="raw"></td><td class="mm"></td>
      <td><div class="bar" style="height:8px;background:var(--panel-2);border-radius:4px;overflow:hidden">
      <i class="fill" style="display:block;height:100%;width:0;background:var(--accent)"></i></div></td>`;
    $('montable').appendChild(row);
    liveRows.set(d.slot, row);
  }
  row.querySelector('.raw').textContent = d.raw;
  row.querySelector('.mm').textContent = MM(d.raw);
  const pct = Math.min(100, (d.raw / Math.max(peak, 400)) * 100);
  row.querySelector('.fill').style.width = `${pct}%`;

  const bar = $(`livebar-${d.slot}`);
  if (bar) bar.style.width = `${pct}%`;
});

// ---------------------------------------------------------------- gamepad

$('padstart').onclick = async () => {
  setMsg('padmsg', 'Starting…', 'warn');
  await window.fire68.startGamepad($('cfgpath').value.trim() || 'gamepad.json');
};
$('padstop').onclick = async () => {
  await window.fire68.stopStream();
  setMsg('padmsg', 'Stopped.', '');
};

window.fire68.onGamepad((d) => {
  if (d.event === 'error' || d.ok === false) {
    setMsg('padmsg', d.error || 'failed', 'err');
    return;
  }
  if (d.event === 'started') {
    setMsg('padmsg', `Virtual pad live with ${d.bindings} bindings.`, 'ok');
    return;
  }
  if (d.event === 'stopped') { setMsg('padmsg', 'Stopped.', ''); return; }
  if (d.event !== 'axes') return;

  stick('lx', d.lx); stick('ly', d.ly);
  stick('rx', d.rx); stick('ry', d.ry);
  trigger('lt', d.lt); trigger('rt', d.rt);
});

/// Sticks are signed, so draw them outward from the centre line.
function stick(id, v) {
  const frac = Math.max(-1, Math.min(1, v / 32767));
  const el = $(id);
  if (frac >= 0) {
    el.style.left = '50%';
    el.style.width = `${frac * 50}%`;
  } else {
    el.style.left = `${50 + frac * 50}%`;
    el.style.width = `${-frac * 50}%`;
  }
  $(`${id}v`).textContent = v;
}

function trigger(id, v) {
  const el = $(id);
  el.style.left = '0';
  el.style.width = `${(v / 255) * 100}%`;
  $(`${id}v`).textContent = v;
}

// ---------------------------------------------------------------- device

$('dbgon').onclick = () => toggleDebug(true);
$('dbgoff').onclick = () => toggleDebug(false);

async function toggleDebug(on) {
  setMsg('dbgmsg', 'Writing…', 'warn');
  const res = await window.fire68.setDebug(on);
  if (!res.ok) { setMsg('dbgmsg', res.error, 'err'); return; }
  setMsg('dbgmsg', res.changed ? `Debug mode is now ${on ? 'on' : 'off'}.`
                               : `Debug mode was already ${on ? 'on' : 'off'}.`, 'ok');
  $('dbg').textContent = on ? 'on' : 'off';
  $('dbgdot').className = `dot ${on ? 'on' : 'off'}`;
}

$('verify').onclick = async () => {
  setMsg('vermsg', 'Reading…', 'warn');
  const res = await window.fire68.verifyEncoding();
  setMsg(
    'vermsg',
    res.ok
      ? `Lossless across all ${res.bytes} bytes. Writes are safe.`
      : `Mismatch at ${res.mismatches} bytes — do not write. ${res.error || ''}`,
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
