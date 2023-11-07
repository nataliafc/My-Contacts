// import { Button } from "../Button";
import { ContactsForm } from "../ContactsForm";
import { Container, Overlay } from "./styles";

import ReactDOM from "react-dom";

export const EditContactModal = () => {
    function handleEditContact(formData: any) {
        console.log("handlesubmit do modal", formData);
        return "b";
    }

    return ReactDOM.createPortal(
        <Overlay>
            <Container>
                <h1>Editar contato</h1>
                <ContactsForm onSubmit={handleEditContact} />
            </Container>
        </Overlay>,
        document.getElementById("modal-root")!
    );
};
