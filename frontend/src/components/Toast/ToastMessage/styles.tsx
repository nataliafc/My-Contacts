import styled from "styled-components";
import { theme } from "../../../assets/styles/theme/default";

type TypeProps = {
    type: string;
};

export const Container = styled.div<TypeProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    background-color: ${({ type }) =>
        type === "success"
            ? theme.toastColors.success
            : type === "error"
            ? theme.toastColors.error
            : theme.colors.primary};

    gap: 12px;
    padding: 16px 32px;

    border-radius: 4px;
    box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);

    & + & {
        margin-top: 12px;
    }
`;
