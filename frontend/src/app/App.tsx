import { ThemeProvider } from "styled-components";

import GlobalStyles from "../assets/styles/global";
import { theme } from "../assets/styles/theme/default";

import { Container } from "./styles";

import { Header } from "../components/Header";

import { ContactsList } from "../components/ContactsList";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Container>
                <Header />
                <ContactsList />
            </Container>
        </ThemeProvider>
    );
}

export default App;
