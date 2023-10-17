// import { Button } from "../Button";
import { ContactsForm } from "../ContactsForm";
import { Container, Overlay } from "./styles";

import ReactDOM from "react-dom";

const modalType: string = "Cadastrar";

export const FormModal = () => {
    return ReactDOM.createPortal(
        <Overlay>
            <Container>
                {modalType === "Cadastrar" ? (
                    <>
                        <h1>Cadastrar contato</h1>
                        <ContactsForm />
                    </>
                ) : (
                    <>
                        <h1>Editar contato</h1>
                        <ContactsForm />
                    </>
                )}
            </Container>
        </Overlay>,
        document.getElementById("modal-root")!
    );
};
