import ReactDOM from "react-dom";
import { ContactsForm } from "../ContactsForm";
import { Container, Overlay } from "./styles";

import ContactsService from "../../services/ContactsService";

// type CreateContactType = {
//     isOpen: boolean
//     setIsOpen: () => boolean
// }

export const CreateContactModal = () => {
    async function handleCreateContact(formData: any) {
        try {
            const contact = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                category_id: formData.categoryId,
            };
            const response = await ContactsService.createContact(contact);
            console.log(response);

        } catch {
            console.log("Ocorreu um erro ao cadastrar o contato!");
        }
    }

    return ReactDOM.createPortal(
        <Overlay>
            <Container>
                <h1>Cadastrar contato</h1>
                <ContactsForm onSubmit={handleCreateContact} />
            </Container>
        </Overlay>,
        document.getElementById("modal-root")!
    );
};
