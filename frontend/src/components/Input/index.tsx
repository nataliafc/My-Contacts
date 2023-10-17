import styled, { css } from "styled-components";
import { theme } from "../../assets/styles/theme/default";

type props = {
    error?: boolean;
};

export const Input = styled.input<props>`
    width: 100%;
    height: 4.463336875664187vh;

    border-radius: 8px;
    border: 2px solid #fff;
    outline: none;

    padding: 0px 16px;
    font-size: 1.8vmin;

    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.04));

    &::placeholder {
        color: #bcbcbc;
    }

    &:focus {
        border: 2px solid ${theme.colors.secondary};
    }

    ${({ error }) =>
        error &&
        css`
        color: ${theme.toastColors.error};
        border: 2px solid ${theme.toastColors.error};
    `}
`;
