import { ToastMessage } from "../ToastMessage";

import { Container } from "./styles";

export function ToastContainer() {
    return (
        <Container>
            <ToastMessage text="Default toast" type="default" />
            <ToastMessage text="Error toast" type="error" />
            <ToastMessage text="Success toast" type="success" />
        </Container>
    );
}
