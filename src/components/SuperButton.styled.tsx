import styled from "styled-components";
import {StyledBtn} from "./Button.styled";
import {MyAnimation} from "../styles/animations/Animations";

export const SuperButton = styled(StyledBtn)`
    border-radius: 5px;
    background-color: aqua;
    color: darkorange;

    &:hover {
        animation: ${MyAnimation} 2s ease-in-out infinite;
    }
`