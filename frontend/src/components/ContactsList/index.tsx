/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useMemo, useState, useCallback } from "react";

import isValidProp from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";

import { Arrow } from "../../assets/icons/arrow-icon";
import { SadFace } from "../../assets/icons/sad-face";
import { EmptyBox } from "../../assets/icons/empty-box";
import { Magnifier } from "../../assets/icons/magnifier-question";

import { Input } from "../Input";
import { Button } from "../Button";
import { Loader } from "../Loader";
import { ContactCard } from "../ContactCard";

import ContactsService from "../../services/ContactsService";

import {
    ButtonsContainer,
    Container,
    ErrorContainer,
    InputContainer,
    ListHeader,
    NoContactsContainer,
    Separator,
    TextError,
} from "./styles";
import { theme } from "../../assets/styles/theme/default";


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
    const [hasError, setHasError] = useState(false);

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
    // catch: erros de cors, response.json, erros de comunicação da fetch, erro que o httpclient ta lançando

    // sempre que uma função estiver no array de dependências de um hook, obrigatoriamente preciso criar essa função dentro de um useCallback para evitar loop de renderização (ex: loadContacts())

    const loadContacts = useCallback(async () => {
        setIsLoading(true);
        try {

            const contactsList: any[] = await ContactsService.listContacts(orderBy);
            setContacts(contactsList);
            setHasError(false);

        } catch (error: any) {
            setHasError(true);
            console.log(error);

        } finally {
            setIsLoading(false);
        }

    }, [orderBy])

    useEffect(() => {
        loadContacts();
    }, [loadContacts]);

    function handleToggleOrderBy() {
        setOrderBy((prevState) => (prevState === "asc" ? "desc" : "asc"));
    }

    function handleSearchTerm(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(e.target.value);
    }

    function handleTryAgain() {
        loadContacts()
    }

    return (
        <StyleSheetManager shouldForwardProp={(text) => isValidProp(text)}>
            <Container>
                <Loader isLoading={isLoading} />

                { contacts.length > 0 &&
                    <InputContainer>
                        <Input
                            name="search-bar"
                            type="text"
                            placeholder="Pesquisar..."
                            value={searchTerm}
                            onChange={handleSearchTerm}
                        />
                    </InputContainer>
                }

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

                {!hasError && (
                    <>
                        { contacts.length < 1 && !isLoading ? (
                            <NoContactsContainer>
                                <EmptyBox />
                                <span> Você ainda não possui nenhum contato cadastrado.
                                    Clique no botão <strong>CRIAR CONTATO</strong> para cadastrar o primeiro!</span>
                            </NoContactsContainer>
                        ) : null  }

                    <ListHeader>
                        { !hasError || (filteredContacts.length > 0) ? null : (
                            <div>
                                <button type="button" onClick={handleToggleOrderBy}>
                                    <span>NOME</span>
                                    <Arrow orderBy={orderBy} />
                                </button>
                            </div>
                        )}

                        { contacts.length > 0 && (filteredContacts.length > 1) && (
                             <strong>
                             {filteredContacts.length}
                             {filteredContacts.length === 1
                                 ? " contato encontrado"
                                 : " contatos encontrados"}
                         </strong>
                        )}

                        { contacts.length > 0 && (filteredContacts.length < 1) &&
                             <div style={{ display: 'flex', marginTop: '3vh', marginLeft: '1.5vw', alignItems: 'flex-start', justifyContent: 'center' }}>
                                <div>
                                    <Magnifier/>
                                </div>
                                <span style={{ display: 'flex', marginLeft: '1vw', color: `${theme.fontColors.secondary}`, fontWeight: 500, fontSize: '1.8vmin', wordBreak: 'break-word'}}>Nenhum resultado encontrado para "{searchTerm}"</span>
                            </div>
                        }

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

                    </>
                )}

                { hasError &&
                <ErrorContainer>
                    <SadFace />
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '30px', alignItems: 'center', gap: 20 }}>
                        <TextError>Ocorreu um erro ao buscar seus contatos!</TextError>
                        <Button
                            ghostButton
                            width="12vw"
                            text="TENTE NOVAMENTE"
                            onClick={ handleTryAgain }
                        />
                    </div>
                </ErrorContainer> }

            </Container>
        </StyleSheetManager>
    );
};
