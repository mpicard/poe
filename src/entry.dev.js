const { app, BrowserWindow } = require('electron');
const { default: installExtension, REDUX_DEVTOOLS } = require('electron-devtools-installer');;
const url = require('url');

let win;

function createWindow() {
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

  installExtension(REDUX_DEVTOOLS)
    .then(name => console.log(`${name} installed`))
    .catch(err => console.error(err));

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
