const {  contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('darkMode', {
    toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
    system: () => ipcRenderer.invoke('dark-mode:system'),
});

// Expose menu navigation
contextBridge.exposeInMainWorld('electronAPI', {
    onNavigate: (callback) => ipcRenderer.on('navigate-to', (event, path) => callback(path)),
});