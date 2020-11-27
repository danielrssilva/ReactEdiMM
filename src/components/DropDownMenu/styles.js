import styled from "styled-components";

export const DropDownDiv = styled.div`
    display: flex;
    position: fixed;
    padding: 10px;
    background: #262626;
    color: white;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    z-index: 10000;
    transition: 0.2s all;
    padding: 0;
    border-radius: 5px;
    font-weight: bold;
    > div {
        padding: 1rem;
        cursor: pointer;
    }
    > p {
        margin: 0;
        padding: 0.5rem;
        cursor: pointer;
    }
    > * {
        border-radius: 5px;
        &:hover {
            transition: 0.2s all;
            background: #363636;
        }
    }
`;
