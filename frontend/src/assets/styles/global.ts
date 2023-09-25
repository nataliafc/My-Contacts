import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Zilla Slab', serif;
    }

    body {
        background: ${({ theme }) => theme.colors.backgroundColor};
        font-size: 1.7vmin;
        /* 1.7vmin = 16px */
    }

    button {
        cursor: pointer;
    }
`;
