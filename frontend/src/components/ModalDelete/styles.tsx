import styled from "styled-components";

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    left: 0;
    top: 0;

    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
`;

export const Container = styled.div`
    width: 100%;
    max-width: 23.4375vw;
    background: #e6e5e5;
    border-radius: 4px;
    padding: 32px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    h1 {
        font-size: 2.7vmin;
    }

    p {
        margin-top: 0.8501594048884166vh;
    }
`;

export const Footer = styled.footer`
    width: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-top: 3.4006376195536663vh;

    .cancel-button {
        margin-right: 0.8333333333333334vw;

    }
`;
