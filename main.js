const {app, BrowserWindow} = require ('electron')

function createWindow(){
    const ventana = new BrowserWindow({
        width: 800,
        height: 850
    })
    ventana.loadFile('renderer.html')
}

app.whenReady().then(createWindow)