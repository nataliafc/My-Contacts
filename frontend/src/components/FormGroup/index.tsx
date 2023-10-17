/* eslint-disable @typescript-eslint/no-unused-vars */

import { Container } from "./styles";

type children = {
    children: JSX.Element;
    error?: string;
};

export const FormGroup = ({ children, error }: children) => {
    return (
        <Container>
            {children}
            {error && <small>{error}</small>}
        </Container>
    );
};

