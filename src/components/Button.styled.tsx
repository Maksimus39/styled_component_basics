import styled from "styled-components";

export const StyledBtn = styled.button`
    border: none;
    background-color: crimson;
    padding: 10px 20px;
    color: bisque;
    font-size: 2rem;
    font-weight: bold;

    &:hover {
        background-color: darkmagenta;
    }

    &:last-child {
        background-color: green;
    }
`