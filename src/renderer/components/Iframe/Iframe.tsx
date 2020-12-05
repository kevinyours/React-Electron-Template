import * as React from 'react';
import Iframe from 'react-iframe';

interface IframeWindowProps {
    url: string;
}

export const IframeWindow: React.FunctionComponent<IframeWindowProps> = (props) => (
    <Iframe url={`${props.url}`} width="100%" height="1080px" display="block" position="relative" />
);
