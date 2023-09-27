import { ContactsList } from "../../components/ContactsList";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { InputSearchContainer } from "./styles";

export const Home = () => {
    return (
        <>
            <InputSearchContainer>
                <Input type="text" placeholder="Pesquisar..." />
            </InputSearchContainer>
            <ContactsList />
            <Select>
                <option>Instagram</option>
                <option>Linkedin</option>
                <option>Orkut</option>
            </Select>
        </>
    );
};
