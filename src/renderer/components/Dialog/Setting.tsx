import { Pane, Dialog } from 'evergreen-ui';
import * as React from 'react';

interface SettingDialogProps {
    isShown: boolean;
    content: {
        title: string;
        content: string;
    };
    switchDisplay: (...args: any) => void;
}

export function SettingDialog({ isShown = false, content, switchDisplay }: SettingDialogProps): React.ReactElement {
    return (
        <Pane>
            <Dialog
                isShown={isShown}
                title={content.title}
                onCloseComplete={switchDisplay}
                confirmLabel={'확인'}
            ></Dialog>
        </Pane>
    );
}
