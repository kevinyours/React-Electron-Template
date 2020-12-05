import { BrowserWindow, app, crashReporter, globalShortcut, ipcMain } from 'electron';
import { MOBX_DEVTOOLS, REACT_DEVELOPER_TOOLS, default as installExtension } from 'electron-devtools-installer';
import { autoUpdater } from 'electron-updater';
import isDev from 'electron-is-dev';
import sourceMapSupport from 'source-map-support';
import { format } from 'url';
import { default as CONFIG } from './constants';
import { activateAutoUpdater, activateIPC, activateShortcutRegister, activateCrashRepoter } from './modules';

if (process.env.ELECTRON_DEBUG === 'true') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('electron-reload')(__dirname);
}

let mainWindow: Electron.BrowserWindow;
const singleInstance = app.requestSingleInstanceLock();

function createWindow(): void {
    if (!singleInstance) {
        app.quit();
        app.exit();
    }

    app.on('second-instance', (event, commandLine, workingDirectory) => {
        if (mainWindow) {
            if (mainWindow.isMinimized()) {
                mainWindow.restore();
            } else if (!mainWindow.isVisible()) {
                mainWindow.show();
            }
            mainWindow.focus();
        }
    });

    mainWindow = new BrowserWindow(CONFIG.WINDOW.MAIN);

    if (process.env.ELECTRON_DEBUG === 'true') {
        mainWindow.webContents.once('dom-ready', () => {
            mainWindow.webContents.openDevTools();
        });
    }

    mainWindow.setMenuBarVisibility(false);

    if (isDev) {
        mainWindow.loadURL(CONFIG.URL.LOCAL_SERVER);
    } else {
        mainWindow.loadURL(
            format({
                pathname: CONFIG.URL.STATIC_FILE,
                protocol: 'file:',
                slashes: true,
            }),
        );
    }

    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
        app.commandLine.appendSwitch('disable-pinch');
    });

    mainWindow.on('closed', () => {
        //@ts-ignore
        mainWindow = undefined;
        globalShortcut.unregisterAll();
    });

    // activate custom modules
    activateIPC(ipcMain);
    activateShortcutRegister({ globalShortcut: globalShortcut, webContents: mainWindow.webContents });
    // activateCrashRepoter({ dsn: CONFIG.URL.SENTRY, crashReporter: crashReporter });
    // activateAutoUpdater({
    //     app: app,
    //     autoUpdater: autoUpdater,
    //     mainWindow: mainWindow,
    // });
}

app.on('ready', () => {
    if (isDev) {
        installExtension(REACT_DEVELOPER_TOOLS)
            .then((name: string) => console.log(`Added Extension:  ${name}`))
            .catch((err: Error) => console.log('An error occurred: ', err));

        installExtension(MOBX_DEVTOOLS)
            .then((name: string) => console.log(`Added Extension:  ${name}`))
            .catch((err: Error) => console.log('An error occurred: ', err));

        sourceMapSupport.install();

        createWindow();
    } else {
        createWindow();
    }
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (mainWindow === undefined) {
        createWindow();
    }
});
