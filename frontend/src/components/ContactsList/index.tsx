import { Button } from "../Button";
import { ContactCard } from "../ContactCard";
import { ButtonsContainer, Container, ListHeader, Separator } from "./styles";

export const ContactsList = () => {
    return (
        <Container>
            <ButtonsContainer>
                <Button text={"CRIAR CONTATO"} />
                <Button text={"CRIAR CATEGORIA"} secondary />
            </ButtonsContainer>

            <Separator />

            <ListHeader>
                <strong>NOME</strong>
                <strong>3 contatos encontrados</strong>
            </ListHeader>

            <ContactCard />
        </Container>
    );
};
