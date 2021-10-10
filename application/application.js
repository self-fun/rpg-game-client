const {app, BrowserWindow} = require("electron");
const path = require("path");

class Application {
    constructor() {
        app.whenReady().then(() => {
            this.createWindow();

            app.on('activate', () => {
                // Fix for mac os
                if (BrowserWindow.getAllWindows().length === 0)
                    this.createWindow();
            })
        });

        app.on('window-all-closed', function () {
            if (process.platform !== 'darwin')
                app.quit();
        })
    }

    createWindow() {
        this.window = new BrowserWindow({
            fullscreen: true,
            autoHideMenuBar: true,
            webPreferences: {
                preload: path.join(__dirname, "window", "preload.js"),
                nodeIntegration: true
            }
        });

        this.window.loadFile(path.join(__dirname, "window", "index.html"));
    }
}

module.exports = Application;