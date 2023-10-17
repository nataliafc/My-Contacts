/* eslint-disable @typescript-eslint/no-unused-vars */

import isValidProp from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";

import { Arrow } from "../../assets/icons/arrow-icon";
import { Button } from "../Button";
import { ContactCard } from "../ContactCard";
import { ButtonsContainer, Container, ListHeader, Separator } from "./styles";
import { useEffect, useState } from "react";

export const ContactsList = () => {
    const [contacts, setContacts] = useState<any>([]);
    const [orderBy, setOrderBy] = useState("asc");

    useEffect(() => {
        fetch(`http://localhost:3002/contacts?orderBy=${orderBy}`, {
            method: "GET",
            headers: new Headers({
                "X-App-ID": "123",
            }),
        })
            .then(async (response) => {
                const json = await response.json();
                setContacts(json);
            })

            .catch((error) => console.log(error));
    }, [orderBy]);

    const handleToggleOrderBy = () => {
        setOrderBy((prevState) => (prevState === "asc" ? "desc" : "asc"));
    };

    return (
        <StyleSheetManager shouldForwardProp={(text) => isValidProp(text)}>
            <Container>
                <ButtonsContainer>
                    <Button
                        width="10vw"
                        text="CRIAR CONTATO"
                        onClick={() =>
                            console.log("abre modal de novo contato")
                        }
                    />
                    <Button
                        width="10vw"
                        text="CRIAR CATEGORIA"
                        onClick={() =>
                            console.log("abre modal de nova categoria")
                        }
                        secondary
                    />
                </ButtonsContainer>

                <Separator />

                <ListHeader >
                    <div>
                        <button type="button" onClick={handleToggleOrderBy}>
                            <span>NOME</span>
                            <Arrow orderBy={orderBy}/>
                        </button>
                    </div>
                    <strong>
                        {contacts.length}
                        {contacts.length === 1
                            ? " contato encontrado"
                            : " contatos encontrados"}
                    </strong>
                </ListHeader>

                <div>
                    {contacts.map((contact: any) => (
                        <ContactCard
                            key={contact.id}
                            name={contact.name}
                            email={contact.email}
                            phone={contact.phone}
                            category={contact.category_name}
                        />
                    ))}
                </div>
            </Container>
        </StyleSheetManager>
    );
};
