import { ThemeProvider } from "styled-components";
import GlobalStyles from "../assets/styles/global";
import { theme } from "../assets/styles/theme/default";

import { Home } from "../pages/Home";

import { Container } from "./styles";

import { ToastContainer } from "../components/Toast/ToastContainer";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <ToastContainer />
            <Container>
                <Home />
            </Container>
        </ThemeProvider>
    );
}

export default App;
