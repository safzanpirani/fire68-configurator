// Electron main process.
//
// The protocol lives entirely in the Rust binary. This process only spawns it
// with --json and relays the results, so there is one implementation of the
// wire format rather than two.

const { app, BrowserWindow, ipcMain } = require('electron');
const { spawn, execFile } = require('child_process');
const path = require('path');
const fs = require('fs');

const BIN = resolveBinary();

function resolveBinary() {
  const candidates = [
    path.join(__dirname, '..', 'fire68', 'target', 'release', 'fire68.exe'),
    path.join(__dirname, '..', 'fire68', 'target', 'debug', 'fire68.exe'),
    path.join(process.resourcesPath || '', 'fire68.exe'),
  ];
  return candidates.find((p) => fs.existsSync(p)) || candidates[0];
}

/// Run a one-shot command and parse its single JSON object.
function runJson(args) {
  return new Promise((resolve) => {
    execFile(BIN, [...args, '--json'], { timeout: 20000 }, (err, stdout, stderr) => {
      const text = (stdout || '').trim();
      if (text) {
        try {
          return resolve(JSON.parse(text.split('\n').pop()));
        } catch {
          // fall through to the error shape below
        }
      }
      resolve({
        ok: false,
        error: (stderr || '').trim() || (err && err.message) || 'no output from fire68',
      });
    });
  });
}

let streamProc = null;

/// Start a long-running command that emits one JSON object per line.
function startStream(win, args, channel) {
  stopStream();
  streamProc = spawn(BIN, [...args, '--json']);
  let buffer = '';

  streamProc.stdout.on('data', (chunk) => {
    buffer += chunk.toString();
    const lines = buffer.split('\n');
    buffer = lines.pop();
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      try {
        win.webContents.send(channel, JSON.parse(trimmed));
      } catch {
        // Ignore any non-JSON noise on the stream.
      }
    }
  });

  streamProc.stderr.on('data', (chunk) => {
    win.webContents.send(channel, { event: 'error', error: chunk.toString().trim() });
  });

  streamProc.on('close', () => {
    win.webContents.send(channel, { event: 'stopped' });
    streamProc = null;
  });
}

function stopStream() {
  if (streamProc) {
    streamProc.kill();
    streamProc = null;
  }
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1180,
    height: 820,
    backgroundColor: '#12141a',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  ipcMain.handle('binary-path', () => BIN);
  ipcMain.handle('info', () => runJson(['info']));
  ipcMain.handle('keymap', () => runJson(['keymap']));
  ipcMain.handle('travel', () => runJson(['travel', '--all']));
  ipcMain.handle('verify-encoding', () => runJson(['verify-encoding']));

  ipcMain.handle('set-travel', (_e, { slot, point, pressRt, releaseRt }) => {
    const args = ['set-travel', '--key', String(slot)];
    if (point !== undefined && point !== null) args.push('--point', String(point));
    if (pressRt !== undefined && pressRt !== null) args.push('--press-rt', String(pressRt));
    if (releaseRt !== undefined && releaseRt !== null) args.push('--release-rt', String(releaseRt));
    return runJson(args);
  });

  ipcMain.handle('set-debug', (_e, on) => runJson(['debug', on ? 'on' : 'off']));

  ipcMain.handle('start-monitor', () => {
    startStream(win, ['monitor'], 'monitor-data');
    return { ok: true };
  });
  ipcMain.handle('start-gamepad', (_e, configPath) => {
    startStream(win, ['gamepad', '--config', configPath], 'gamepad-data');
    return { ok: true };
  });
  ipcMain.handle('stop-stream', () => {
    stopStream();
    return { ok: true };
  });

  win.loadFile('index.html');

  // Screenshot hook for UI work. Inert unless ELECTRON_CAPTURE is set.
  require('./capture-hook')(app, win);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  stopStream();
  if (process.platform !== 'darwin') app.quit();
});

app.on('before-quit', stopStream);
