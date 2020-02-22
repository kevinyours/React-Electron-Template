const init = (event: Electron.IpcMainEvent, args: any): void => {
    console.log('----------------------');
    console.log(args);
    console.log('----------------------');

    event.reply('INIT', 'Electron is initialized...');
};

export default {
    init: init,
};
