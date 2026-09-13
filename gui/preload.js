const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('fire68', {
  binaryPath: () => ipcRenderer.invoke('binary-path'),
  info: () => ipcRenderer.invoke('info'),
  keymap: () => ipcRenderer.invoke('keymap'),
  travel: () => ipcRenderer.invoke('travel'),
  verifyEncoding: () => ipcRenderer.invoke('verify-encoding'),
  setTravel: (payload) => ipcRenderer.invoke('set-travel', payload),
  setDebug: (on) => ipcRenderer.invoke('set-debug', on),
  startMonitor: () => ipcRenderer.invoke('start-monitor'),
  startGamepad: (configPath) => ipcRenderer.invoke('start-gamepad', configPath),
  initGamepad: (configPath) => ipcRenderer.invoke('init-gamepad', configPath),
  configDir: () => ipcRenderer.invoke('config-dir'),
  stopStream: () => ipcRenderer.invoke('stop-stream'),
  onMonitor: (cb) => ipcRenderer.on('monitor-data', (_e, d) => cb(d)),
  onGamepad: (cb) => ipcRenderer.on('gamepad-data', (_e, d) => cb(d)),
});
