/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

interface Props extends ButtonHTMLAttributes<any> {
    text: string;
    secondary?: boolean;
    weight?: number;
    vertical?: string;
    horizontal?: string;
    loading?: boolean;
    width?: string;
    height?: string;
    onClick?: () => void;
    alternativeColor?: boolean;
    fontSize?: string;
}

export const Button = ({
    text,
    secondary,
    weight,
    vertical,
    horizontal,
    loading,
    width,
    onClick,
    alternativeColor,
    fontSize,
    height,
    ...rest
}: Props) => {
    const clickHandle = () => {
        if (!loading && onClick) {
            onClick();
        }
    };

    return (
        <Container
            {...rest}
            style={{
                fontStyle: "normal",
                fontWeight: weight ?? 500,
            }}
            $text={text}
            $secondary={secondary}
            weight={weight}
            vertical={vertical}
            horizontal={horizontal}
            width={width}
            height={height}
            onClick={clickHandle}
            alternativeColor={alternativeColor}
            fontSize={fontSize}
        >
            <span
                style={{  width: '100%', visibility: loading === true ? "hidden" : "visible" }}
            >
                {text}
            </span>
        </Container>
    );
};
