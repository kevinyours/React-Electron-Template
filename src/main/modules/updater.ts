import { default as CONFIG } from '../constants';

export default ({
    app,
    autoUpdater,
    mainWindow,
}: {
    app: Electron.App;
    autoUpdater: any;
    mainWindow: Electron.BrowserWindow;
}): void => {
    const webContents: Electron.webContents = mainWindow.webContents;

    autoUpdater.setFeedURL({ url: CONFIG.URL.UPDATE_SERVER });

    webContents.on('did-finish-load', () => {
        autoUpdater.checkForUpdates();
    });

    autoUpdater.on('update-available', function () {
        webContents.send('UPDATE_AVAILABLE', true);
    });

    autoUpdater.on('download-progress', (processObj: any) => webContents.send('DOWNLOAD_UPDATE', processObj));

    autoUpdater.on('update-downloaded', function (event: Electron.Event) {
        app.focus();

        try {
            mainWindow.setClosable(true);
            autoUpdater.quitAndInstall();
            setTimeout(function () {
                app.relaunch();
                app.quit();
            }, 1000);
        } catch (err) {
            console.trace(err);
        }
    });
};
