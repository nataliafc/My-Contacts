import { Container } from "./styles";

import { XCircle } from "../../../assets/icons/x-circle";
import { Check } from "../../../assets/icons/check-circle";

type ToastTypes = {
    text: string;
    type: string;
};

export function ToastMessage({ text, type }: Readonly<ToastTypes>) {
    return (
        <Container type={type}>
            {type === "error" && <XCircle />}
            {type === "success" && <Check />}
            {text}
        </Container>
    );
}
