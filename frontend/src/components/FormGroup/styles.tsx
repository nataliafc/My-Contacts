import styled from "styled-components";
import { theme } from "../../assets/styles/theme/default";

export const Container = styled.div`
    small {
        color: ${theme.toastColors.error};
        font-size: 1.2vmin;
        font-weight: 600;
    }

    .form-item {
        position: relative;

        .loader {
            position: absolute;
            top: -18px;
            right: 16px;
        }
    }
`;
