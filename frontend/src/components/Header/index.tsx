import { MyContactsLogo } from "../../assets/images/MyContactsLogo";
import { Input } from "../Input";

import { Container } from "./styles";

export const Header = () => {
    return (
        <Container>
            <MyContactsLogo />
            <div style={{ display: 'flex', width: '100%', marginTop: '3.1253985122210413vh' }}>
                <Input  name="search-bar" type="text" placeholder="Pesquisar..." />
            </div>
        </Container>
    );
};
