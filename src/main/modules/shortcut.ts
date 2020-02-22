export default ({
    globalShortcut,
    webContents,
}: {
    globalShortcut: Electron.GlobalShortcut;
    webContents: Electron.webContents;
}): void => {
    globalShortcut.register('CommandOrControl+Shift+O', () => {
        // 시스템 설정창 열기
        webContents.send('SETTING', 'ON');
    });

    globalShortcut.register('CommandOrControl+Shift+I', () => {
        // 개발자 도구 활성화
        webContents.openDevTools();
    });

    globalShortcut.register('CommandOrControl+Plus', () => {
        // Ctrl & + 오버라이드
        console.log('Ctrl + Plus...');
    });

    globalShortcut.register('CommandOrControl+-', () => {
        // Ctrl & - 오버라이드
        console.log('Ctrl + Minus...');
    });
};
