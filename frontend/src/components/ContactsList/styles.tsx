import styled from "styled-components";
import { theme } from "../../assets/styles/theme/default";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const ListHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    strong {
        font-size: 1.7vmin;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
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

    margin-top: 2.1253985122210413vh;
    margin-bottom: 2.1253985122210413vh;
`;
