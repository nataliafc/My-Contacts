import styled from "styled-components";
import { theme } from "../../assets/styles/theme/default";

export const Select = styled.select`
    width: 100%;
    height: 4.463336875664187vh;

    border: 2px solid #fff;
    border-radius: 8px;
    outline: none;

    padding: 0px 16px;
    font-size: 1.8vmin;

    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.04));

    &::placeholder {
        color: #bcbcbc;
    }

    .form-select {
        &:focus {
            border: 2px solid ${theme.colors.secondary};
        }
    }
`;
