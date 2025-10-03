const { app, BrowserWindow, globalShortcut } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      devTools: false
    }
  });

  win.loadFile('pvzge_web/docs/index.html');
  win.removeMenu(); // hides the top menu bar

  // Register shortcuts for fullscreen toggle
  globalShortcut.register('F4', () => {
    win.setFullScreen(!win.isFullScreen());
  });

  globalShortcut.register('F11', () => {
    win.setFullScreen(!win.isFullScreen());
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('will-quit', () => {
  // Unregister all shortcuts
  globalShortcut.unregisterAll();
});
