import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './contexts';
import { Store } from './stores';
import { Root } from './containers';

const store = new Store();

const App: React.FunctionComponent = () => (
    <BrowserRouter>
        <StoreProvider value={store}>
            <Root />
        </StoreProvider>
    </BrowserRouter>
);

export default hot(module)(App);
