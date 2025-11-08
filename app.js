const {app, BrowserWindow, ipcMain} = require('electron')

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: __dirname + '/preload.js',
            nodeIntegration: false,
            contextIsolation: true
        }
    })
    if (process.env.NODE_ENV === 'dev') {
        win.loadURL('http://localhost:3000')
    } else {
        win.loadFile('public/index.html')
    }
    win.maximize()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})