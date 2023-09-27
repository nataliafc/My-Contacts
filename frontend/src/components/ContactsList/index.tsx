import { Arrow } from "../../assets/icons/arrow-icon";
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
    );
};
