// Renders each view of an Electron app to a PNG, then quits.
//
// Inert unless ELECTRON_CAPTURE is set, so it is safe to leave wired in.
//
//   win.loadFile('index.html');
//   require('./capture-hook')(app, win);
//
// Environment:
//   ELECTRON_CAPTURE            output directory (required to do anything)
//   ELECTRON_CAPTURE_VIEWS      comma-separated view names   (default: one shot, no switching)
//   ELECTRON_CAPTURE_THEMES     comma-separated variants     (default: none)
//   ELECTRON_CAPTURE_SELECTOR   click target, {view} substituted
//                               (default: [data-view="{view}"])
//   ELECTRON_CAPTURE_EVAL       renderer expression with `view` in scope,
//                               used instead of clicking a selector
//   ELECTRON_CAPTURE_THEME_EVAL renderer expression with `theme` in scope
//   ELECTRON_CAPTURE_SETTLE     ms to wait after load before the first shot (default 2500)
//   ELECTRON_CAPTURE_DELAY      ms to wait after each switch (default 900)

const fs = require('fs');
const path = require('path');

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

module.exports = function captureHook(app, win) {
  const outDir = process.env.ELECTRON_CAPTURE;
  if (!outDir) return;

  const views = split(process.env.ELECTRON_CAPTURE_VIEWS);
  const themes = split(process.env.ELECTRON_CAPTURE_THEMES);
  const settle = int(process.env.ELECTRON_CAPTURE_SETTLE, 2500);
  const delay = int(process.env.ELECTRON_CAPTURE_DELAY, 900);
  const selector = process.env.ELECTRON_CAPTURE_SELECTOR || '[data-view="{view}"]';

  win.webContents.once('did-finish-load', async () => {
    try {
      fs.mkdirSync(outDir, { recursive: true });

      // did-finish-load fires before the first paint. capturePage would
      // resolve against an unpainted surface and write a 0-byte PNG, so wait
      // for the renderer to actually produce frames first.
      await waitForFrame(win);
      await wait(settle);

      for (const theme of themes.length ? themes : [null]) {
        if (theme !== null) {
          await applyTheme(win, theme);
          await wait(delay);
        }
        for (const view of views.length ? views : [null]) {
          if (view !== null) {
            await applyView(win, view, selector);
            await wait(delay);
          }
          const name = [theme, view].filter(Boolean).join('-') || 'app';
          const buf = await captureWithRetry(win);
          fs.writeFileSync(path.join(outDir, `${name}.png`), buf);
          console.log('captured', theme || '', view || '', buf.length, 'bytes');
        }
      }
    } catch (err) {
      console.log('capture error:', err && err.message ? err.message : err);
    } finally {
      // Quit even on failure so a bad selector cannot hang the run.
      app.quit();
    }
  });
};

// Resolves once the renderer has produced two animation frames, which means
// it has actually painted. A fixed delay only guesses at this.
async function waitForFrame(win) {
  try {
    await win.webContents.executeJavaScript(
      'new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(() => r(true))))'
    );
  } catch {
    // A renderer that cannot run script will be caught by the retry loop.
  }
}

// capturePage resolves against an unpainted surface if called too early and
// yields an empty image without erroring. Retry until real pixels arrive
// rather than trusting a fixed delay.
async function captureWithRetry(win, attempts = 8, gap = 750, min = 1000) {
  let buf = Buffer.alloc(0);
  for (let i = 0; i < attempts; i++) {
    await waitForFrame(win);
    buf = (await win.webContents.capturePage()).toPNG();
    if (buf.length >= min) return buf;
    await wait(gap);
  }
  console.log('capture warning: image still empty after', attempts, 'attempts');
  return buf;
}

async function applyView(win, view, selector) {
  if (process.env.ELECTRON_CAPTURE_EVAL) {
    return win.webContents.executeJavaScript(
      `(async (view) => { ${process.env.ELECTRON_CAPTURE_EVAL} })(${JSON.stringify(view)})`
    );
  }
  const sel = selector.replace('{view}', view);
  // Return a flag rather than throwing. Electron replaces a thrown error with
  // a generic "Script failed to execute", which hides which selector missed.
  const found = await win.webContents.executeJavaScript(`
    (() => {
      const el = document.querySelector(${JSON.stringify(sel)});
      if (el) el.click();
      return !!el;
    })()
  `);
  if (!found) {
    throw new Error(`no element matches ${sel} for view "${view}"`);
  }
}

async function applyTheme(win, theme) {
  if (process.env.ELECTRON_CAPTURE_THEME_EVAL) {
    return win.webContents.executeJavaScript(
      `(async (theme) => { ${process.env.ELECTRON_CAPTURE_THEME_EVAL} })(${JSON.stringify(theme)})`
    );
  }
  return win.webContents.executeJavaScript(
    `document.documentElement.dataset.theme = ${JSON.stringify(theme)}`
  );
}

function split(v) {
  return (v || '').split(',').map((s) => s.trim()).filter(Boolean);
}

function int(v, fallback) {
  const n = parseInt(v, 10);
  return Number.isFinite(n) ? n : fallback;
}
