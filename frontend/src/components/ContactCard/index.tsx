/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Edit } from "../../assets/icons/edit-icon";
import { Trash } from "../../assets/icons/trash-icon";

import { Container } from "./styles";
import { formatPhone } from "../../utils/formatPhone";

type ContactInformationType = {
    name: string;
    category: string;
    email: string;
    phone: string;
};

export const ContactCard = ({
    name,
    category,
    email,
    phone,
}: ContactInformationType) => {
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    return (
        <Container>
            <div className="contact-information">
                <div className="contact-name">
                    <strong>{ name }</strong>
                    { category && <small>{category}</small> }
                </div>
                <span>{ email }</span>
                <span>{ formatPhone(phone) }</span>
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
