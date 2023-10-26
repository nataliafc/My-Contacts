/* eslint-disable @typescript-eslint/no-unused-vars */

import { Container } from "./styles";

type children = {
    children: JSX.Element;
    error?: string;
    isLoading?: boolean;
};

export const FormGroup = ({ children, error, isLoading }: children) => {
    return (
        <Container>
            <div className="form-item">
                {children}

                { isLoading && <div className="loader" /> }
            </div>
            {error && <small>{error}</small>}
        </Container>
    );
};
