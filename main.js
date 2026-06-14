const { app, BrowserWindow, shell } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    alwaysOnTop: true,
    frame: false,
    webPreferences: { nodeIntegration: true }
  });

  win.loadFile('index.html'); // 대시보드 띄우기
  shell.openExternal("https://subjop.tistory.com/entry/코스피-나스닥-달러-환율-실시간-조회...");
}

app.whenReady().then(createWindow);
