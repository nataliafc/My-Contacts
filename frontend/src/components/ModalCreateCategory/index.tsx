import { Container, Overlay } from "./styles";

import ReactDOM from "react-dom";

export function CreateCategoryModal() {
    return ReactDOM.createPortal(
        <Overlay>
            <Container>
                <div>modal para criar categorias</div>
                <div>não é necessário fazer um form grande</div>
                <div>apenas um input com nome e botões de confirm/cancel</div>
            </Container>
        </Overlay>,
        document.getElementById("modal-root")!
    );
}
