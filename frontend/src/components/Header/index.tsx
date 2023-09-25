import { MyContactsLogo } from "../../assets/images/MyContactsLogo";

import { Container, InputSearchContainer } from "./styles";

export const Header = () => {
    return (
        <Container>
            <MyContactsLogo />
            <InputSearchContainer>
                <input type="text" placeholder="Pesquisar..." />
            </InputSearchContainer>
        </Container>
    );
};
