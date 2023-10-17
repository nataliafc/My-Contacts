/* eslint-disable @typescript-eslint/no-unused-vars */

import isValidProp from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";

import { Arrow } from "../../assets/icons/arrow-icon";
import { Button } from "../Button";
import { ContactCard } from "../ContactCard";
import { ButtonsContainer, Container, ListHeader, Separator } from "./styles";

export const ContactsList = () => {
    return (
        <StyleSheetManager
            shouldForwardProp={(text) => isValidProp(text)}
        >
            <Container>
                <ButtonsContainer>
                    <Button width="10vw" text="CRIAR CONTATO" />
                    <Button width="10vw" text="CRIAR CATEGORIA" secondary />
                </ButtonsContainer>

                <Separator />

                <ListHeader>
                    <div>
                        <button type="button">
                            <span>NOME</span>
                            <Arrow />
                        </button>
                    </div>
                    <strong>3 contatos encontrados</strong>
                </ListHeader>

                <div>
                    <ContactCard />
                    <ContactCard />
                    <ContactCard />
                </div>
            </Container>
        </StyleSheetManager>
    );
};
