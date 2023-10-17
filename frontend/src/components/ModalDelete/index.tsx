import { Button } from "../Button";
import { Container, Footer, Overlay } from "./styles";

import ReactDOM from "react-dom";

export const DeleteModal = () => {
    return ReactDOM.createPortal(
        <Overlay>
            <Container>
                <h1>Tem certeza de que quer deletar o contato xxxxxx?</h1>
                <Footer>
                    <Button
                        className="cancel-button"
                        width="5vw"
                        alternativeColor
                        text={"Cancelar"}
                    ></Button>
                    <Button width="5vw" text={"Confirmar"}>
                        Confirmar
                    </Button>
                </Footer>
            </Container>
        </Overlay>,
        document.getElementById("modal-root")!
    );
};
