import * as React from 'react';
import styled from '@emotion/styled';

type Props = {
    children: React.ReactNode;
};

const Container = styled.div`
    body {
        padding: 0;
        overflow: auto;
    }
`;

export const Layout: React.FunctionComponent<Props> = (props) => (
    <Container>
        <main>{props.children}</main>
    </Container>
);
