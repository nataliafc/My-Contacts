import styled from "styled-components";
import { theme } from "../../assets/styles/theme/default";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 16px;

    border-radius: 4px;

    & + & {
        margin-top: 1.7003188097768331vh;
    }

    .contact-information {
        .contact-name {
            display: flex;
            align-items: center;

            small {
                color: ${theme.fontColors.title};
                background-color: ${theme.fontColors.subtitle};

                padding: 4px;
                margin-left: 0.4166666666666667vw;
                border-radius: 4px;

                text-transform: uppercase;
                font-weight: 700;
            }
        }

        span {
            display: block;
            color: ${theme.fontColors.secondary};
            font-size: 1.5vmin;
        }
    }

    .actions {
        display: flex;
        width: 3.6458333333333335vw;
        justify-content: space-around;

        align-items: center;
    }
`;
