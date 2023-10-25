/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useMemo, useState } from "react";

import isValidProp from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";

import { Arrow } from "../../assets/icons/arrow-icon";

import { Input } from "../Input";
import { Button } from "../Button";
import { Loader } from "../Loader";
import { ContactCard } from "../ContactCard";

import ContactsService from "../../services/ContactsService";

import {
    ButtonsContainer,
    Container,
    InputContainer,
    ListHeader,
    Separator,
} from "./styles";

type ContactType = {
    id: string;
    name: string;
    email: string;
    phone: string;
    category_id: string;
}[];

export const ContactsList = () => {
    const [contacts, setContacts] = useState<ContactType>([]);
    const [orderBy, setOrderBy] = useState("asc");
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredContacts = useMemo(
        () =>
            contacts.filter((contact: any) =>
                contact.name.toLowerCase().includes(searchTerm.toLowerCase())
            ),
        [contacts, searchTerm]
    );

    // useEffect não pode ser assíncrono, deve sempre ser uma função síncrona
    // mas pode possuir uma função assíncrona dentro dele

    // o try / catch é o meio de pegar erros disparados em um async/await
    useEffect(() => {
        async function loadContacts() {
            try {
                const contactsList = await ContactsService.listContacts(orderBy);
                setContacts(contactsList);
                setIsLoading(true);

            } catch (error) {
                // erros de cors, response.json, erros de comunicação da fetch, erro que o httpclient ta lançando
                console.log(error);

            } finally {
                setIsLoading(false);
            }
        }

        loadContacts();
    }, [orderBy]);

    function handleToggleOrderBy() {
        setOrderBy((prevState) => (prevState === "asc" ? "desc" : "asc"));
    }

    function handleSearchTerm(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(e.target.value);
    }

    return (
        <StyleSheetManager shouldForwardProp={(text) => isValidProp(text)}>
            <Container>
                <Loader isLoading={isLoading} />

                <InputContainer>
                    <Input
                        name="search-bar"
                        type="text"
                        placeholder="Pesquisar..."
                        value={searchTerm}
                        onChange={handleSearchTerm}
                    />
                </InputContainer>

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
                        secondary
                        onClick={() =>
                            console.log("abre modal de nova categoria")
                        }
                    />
                </ButtonsContainer>

                <Separator />

                <ListHeader>
                    {filteredContacts.length < 1 ? null : (
                        <div>
                            <button type="button" onClick={handleToggleOrderBy}>
                                <span>NOME</span>
                                <Arrow orderBy={orderBy} />
                            </button>
                        </div>
                    )}

                    <strong>
                        {filteredContacts.length}
                        {filteredContacts.length === 1
                            ? " contato encontrado"
                            : " contatos encontrados"}
                    </strong>
                </ListHeader>

                <div>
                    {filteredContacts.map((contact: any) => (
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
