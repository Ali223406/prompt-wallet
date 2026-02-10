const { app, BrowserWindow, ipcMain, nativeTheme, Menu } = require('electron');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development' || process.env.ELECTRON_START_URL === 'true';

if (!app.requestSingleInstanceLock()) {
  app.quit();
}

// Dark mode IPC handlers used by preload.js
ipcMain.handle('dark-mode:toggle', () => {
  nativeTheme.themeSource = nativeTheme.shouldUseDarkColors ? 'light' : 'dark';
  return nativeTheme.shouldUseDarkColors;
});

ipcMain.handle('dark-mode:system', () => {
  nativeTheme.themeSource = 'system';
  return nativeTheme.shouldUseDarkColors;
});

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (isDev) {
    win.loadURL('http://localhost:3000');
  } else {
    win.loadFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
  }

  win.once('ready-to-show', () => {
    win.show();
    if (isDev) {
      setTimeout(() => win.webContents.openDevTools(), 1000);
    }
  });
  return win;
}

// Create native menu
function createMenu(mainWindow) {
  const template = [
    {
      label: 'Prompt',
      submenu: [
        {
          label: 'Liste',
          click: () => {
            mainWindow.webContents.send('navigate-to', '/');
          },
        },
        {
          label: 'Nouveau',
          click: () => {
            mainWindow.webContents.send('navigate-to', '/new-prompt');
          },
        },
      ],
    },
    {
      label: 'Info',
      submenu: [
        {
          label: 'CGU',
          click: () => {
            mainWindow.webContents.send('navigate-to', '/cgu');
          },
        },
        {
          label: 'A propos',
          click: () => {
            mainWindow.webContents.send('navigate-to', '/about');
          },
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.on('second-instance', () => {
  const [win] = BrowserWindow.getAllWindows();
  if (win) {
    if (win.isMinimized()) win.restore();
    win.focus();
  }
});

app.whenReady().then(() => {
  const mainWindow = createWindow();
  createMenu(mainWindow);
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
