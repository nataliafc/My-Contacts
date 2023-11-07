/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { theme } from "../../assets/styles/theme/default";

interface Props extends ButtonHTMLAttributes<any> {
    $text: string;
    $secondary?: boolean;
    weight?: number;
    ghostButton?: boolean;
    vertical?: string;
    horizontal?: string;
    loading?: boolean;
    width?: string;
    height?: string;
    onClick?: () => void;
    alternativeColor?: boolean;
    fontSize?: string;
}

export const Container = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${(p) => (p.width ? p.width : "100%")};
    height: ${(p) => (p.height ? p.height : "auto")};

    appearance: none;
    border: 0;
    border-radius: 4px;
    outline: none;

    border: ${(p) =>
        p.ghostButton ? `2px solid ${theme.fontColors.title}` : null};

    background-color: ${(p) =>
        p.disabled
            ? theme.buttonColors.disabled
            : p.$secondary
            ? theme.buttonColors.secondary
            : p.alternativeColor
            ? theme.buttonColors.alternative
            : p.ghostButton
            ? theme.buttonColors.alternative
            : theme.buttonColors.primary};

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};

    :hover {
        border-radius: 4px;
        background-color: ${(p) =>
            p.disabled
                ? theme.buttonColors.disabled
                : p.$secondary
                ? theme.hoverColors.secondary
                : p.alternativeColor
                ? theme.hoverColors.alternative
                : p.ghostButton
                ? theme.fontColors.subtitle
                : theme.hoverColors.primary};

        transition: all 0.3s ease-out;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 1.7vmin;
        color: ${theme.fontColors.button};
        color: ${(p) =>
            p.alternativeColor ? theme.buttonColors.primary : null};
        color: ${(p) => (p.ghostButton ? theme.fontColors.title : null)};

        padding: ${(p) => (p.vertical ? p.vertical : "1vh")};
        ${(p) => (p.horizontal ? p.horizontal : "1vw")};
    }
`;
