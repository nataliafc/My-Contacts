/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Edit } from "../../assets/icons/edit-icon";
import { Trash } from "../../assets/icons/trash-icon";

import { Container } from "./styles";

export const ContactCard = () => {
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    return (
        <Container>
            <div className="contact-information">
                <div className="contact-name">
                    <strong>Nome do Contato</strong>
                    <small>instagram</small>
                </div>
                <span>email@email.com</span>
                <span>(99)9999-9999</span>
            </div>
            <div className="actions">
                {/* <Edit onClick={setOpenEditModal(!openEditModal)}/>
                <Trash onClick={setOpenDeleteModal(!openDeleteModal)}/> */}
                <div style={{ cursor: "pointer" }}>
                    <Edit />
                </div>
                <div style={{ cursor: "pointer" }}>
                    <Trash />
                </div>
            </div>
        </Container>
    );
};
