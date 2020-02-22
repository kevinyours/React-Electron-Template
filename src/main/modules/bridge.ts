import { default as RPC } from './rpc';

export default (ipcMain: Electron.IpcMain): void => {
    ipcMain.on('INIT', RPC.init);
};
