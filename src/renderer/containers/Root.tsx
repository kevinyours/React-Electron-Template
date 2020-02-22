import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { useObserver } from 'mobx-react-lite';
import { useStore } from '../contexts';
import { Home } from './index';
import { ipcRenderer } from '../common';

export function Root(): React.ReactElement {
    const store = useStore();
    const [currentWindow, setCurrentWindow] = useState<boolean>(true);

    useEffect(() => {
        ipcRenderer.on('INIT', (event: Electron.IpcRendererEvent, args: any) => {
            console.log('-------------------------');
            console.log(args);
            console.log('-------------------------');
        });

        ipcRenderer.send('INIT', 'React is initialized...');

        ipcRenderer.on('SETTING', (event: Electron.IpcRendererEvent, args: any) => {
            setCurrentWindow(!currentWindow);
            store.switchWindow(currentWindow);
        });
    }, [currentWindow]);

    return useObserver(() => (
        <React.Fragment>
            <Route path={'/'}>
                <Home url={store.display.currentWindow} />
            </Route>
        </React.Fragment>
    ));
}
