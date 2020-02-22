import * as path from 'path';

export default {
    URL: {
        UPDATE_SERVER: '',
        LOCAL_SERVER: 'http://localhost:3100',
        STATIC_FILE: path.join(__dirname, 'index.html'),
        SENTRY: '',
    },
    WINDOW: {
        MAIN: {
            width: 1920,
            height: 1080,
            show: false,
            center: true,
            resizable: false,
            webPreferences: {
                nodeIntegration: true,
                preload: path.join(__dirname, 'preload.js'),
            },
        },
    },
};
