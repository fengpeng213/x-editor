import path from 'path';
import { BrowserWindow, app } from 'electron';
// import BrowserWinHandler from './BrowserWinHandler';

const isDev = process.env.NODE_ENV === 'development';
const INDEX_PATH = path.resolve(__dirname, '../enderer/index.html');
const DEV_SERVER_URL = process.env.DEV_SERVER_URL; // eslint-disable-line prefer-destructuring

let win = null;
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  if (isDev) {
    win.loadURL(DEV_SERVER_URL);
  } else {
    win.loadFile(INDEX_PATH);
  }

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null
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

export default win;
