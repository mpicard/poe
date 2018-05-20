require('dotenv').load();

const url = require('url');
const { app, BrowserWindow } = require('electron');
const { default: installExt, REDUX_DEVTOOLS } = require('electron-devtools-installer');

let win;

function createWindow() {

  installExt(REDUX_DEVTOOLS)
    .then(() => console.log('Redux Devtools installed.'))
    .catch(err => console.error(err));

  win = new BrowserWindow({
    width: 937,
    height: 937,
    backgroundColor: '#545e75'
  });

  setTimeout(() => {
    win.loadURL(url.format({
      pathname: 'localhost:4848',
      protocol: 'http:',
      slashes: true
    }));
  }, 5e3);

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
