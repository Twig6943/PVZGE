const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      devTools: false
    }
  });

  win.loadFile('pvzge_web/docs/index.html');
  win.removeMenu(); // This hides the top menu bar (File, Edit, etc.)
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
