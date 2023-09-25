/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { theme } from "../../assets/styles/theme/default";

interface Props extends ButtonHTMLAttributes<any> {
    text?: string | undefined;
    secondary?: boolean;
    weight?: number;
    vertical?: string;
    horizontal?: string;
    loading?: boolean;
    width?: string;
    height?: string;
    onClick?: () => void;
    alternativeColor?: string;
    fontSize?: string;
}

export const Container = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${(p) => (p.width ? p.width : "auto")};
    height: ${(p) => (p.height ? p.height : "auto")};

    appearance: none;
    border: 0;
    border-radius: 4px;
    outline: none;

    background-color: ${(p) =>
        p.disabled
            ? theme.buttonColors.disabled
            : p.secondary
            ? theme.buttonColors.secondary
            : theme.buttonColors.primary};
    ${(p) =>
        p.disabled
            ? theme.buttonColors.disabled
            : p.alternativeColor
            ? theme.buttonColors.alternative
            : null}

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};

    :hover {
        border-radius: 4px;
        background-color: ${(p) =>
            p.disabled
                ? theme.buttonColors.disabled
                : p.secondary
                ? theme.hoverColors.secondary
                : theme.hoverColors.primary};
        ${(p) => (p.alternativeColor ? theme.hoverColors.alternative : null)}

        transition: all 0.3s ease-in-out;
    }

    span {
        font-size: 1.7vmin;
        color: ${theme.fontColors.button};
        ${(p) => (p.alternativeColor ? theme.buttonColors.primary : null)}

        padding: ${(p) => (p.vertical ? p.vertical : "1vh")};
        ${(p) => (p.horizontal ? p.horizontal : "1vw")};
    }
`;
