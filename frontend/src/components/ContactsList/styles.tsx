import styled from "styled-components";
import { theme } from "../../assets/styles/theme/default";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const ListHeader = styled.header`
    width: 97%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 2vh;
    margin-left: 0.4166666666666667vw;

    strong {
        font-size: 2vmin;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    button {
        display: flex;
        align-items: center;
        border: none;
        background: transparent;
    }

    span {
        margin-right: 0.4166666666666667vw;
        font-weight: 700;
        color: ${theme.buttonColors.primary};
        font-size: 1.8vmin;
    }
`;

export const Separator = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${theme.fontColors.button};

    border-radius: 16px;

    margin-bottom: 1.2752391073326248vh;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;

    width: 85%;
    align-items: center;

    margin-left: 1.9vw;

    justify-content: space-between;

    margin-top: -2.1253985122210413vh;
    margin-bottom: 2.1253985122210413vh;
`;

export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 4.5253985122210413vh;
`;

export const ErrorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextError = styled.strong`
    color: ${theme.toastColors.error};
    font-size: 1.8vmin;
`;

