import Iframe from 'react-iframe';
import { Layout, IframeWindow } from '../components';
import * as React from 'react';

interface HomeProps {
    url: string;
}

export function Home({ url }: HomeProps): React.ReactElement {
    return (
        <Layout>
            <IframeWindow url={url} />
        </Layout>
    );
}
