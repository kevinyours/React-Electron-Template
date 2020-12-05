import { action, computed, observable } from 'mobx';
import { ipcRenderer, webFrame, URL } from '../common';

interface StoreProps {
    ipcRenderer: typeof ipcRenderer;
    display: {
        status: boolean;
        currentWindow: string;
    };
    enableDisplayConfig: (status: boolean) => void;
    switchWindow: (type: boolean) => void;
    initDisplayRatio: () => void;
    clearDisplayCache: () => void;
}

export default class Store implements StoreProps {
    ipcRenderer = ipcRenderer;
    @observable display = {
        status: true,
        currentWindow: URL.SLR_CLUB,
    };

    @action
    enableDisplayConfig(status: boolean): void {
        this.display.status = status;
    }

    @action
    switchWindow(type: boolean): void {
        this.display.currentWindow = type === true ? URL.SLR_CLUB : URL.SEEKO;
    }

    @action
    initDisplayRatio(): void {
        webFrame.setVisualZoomLevelLimits(1, 1);
        webFrame.setLayoutZoomLevelLimits(0, 0);
    }

    @action
    clearDisplayCache(): void {
        webFrame.clearCache();
    }

    @action
    set setDisplayRatio(ratio: number) {
        webFrame.setZoomFactor(ratio);
    }

    @computed
    get getDisplayRatio(): number {
        return webFrame.getZoomFactor();
    }
}
