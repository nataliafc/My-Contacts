import { ThemeProvider } from "styled-components";
import GlobalStyles from "../assets/styles/global";
import { theme } from "../assets/styles/theme/default";

import { Home } from "../pages/Home";
// import { Header } from "../components/Header";

import { Container } from "./styles";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Container>
                <Home />
            </Container>
        </ThemeProvider>
    );
}

export default App;
