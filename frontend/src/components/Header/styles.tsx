import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    flex-direction: column;

    margin-top: 7.863974495217853vh;

    justify-content: center;
    align-items: center;
`;

export const InputSearchContainer = styled.div`
    width: 100%;
    margin-top: 5.100956429330499vh;

    input {
        width: 100%;
        height: 4.463336875664187vh;
        border: none;
        border-radius: 8px;
        padding: 0px 10px;
        outline: 0;

        filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.04));

        &::placeholder {
            color: #bcbcbc;
        }
    }
`;

