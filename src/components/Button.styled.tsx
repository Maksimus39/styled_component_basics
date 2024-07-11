import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType:"outlined"|"primary"
    active?:boolean
}


export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: ${props => props.fontSize || "2rem"};
    font-weight: bold;


    ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
        //outlined
        border: 2px solid ${props => props.color || "crimson"};
        color: ${props => props.color || "crimson"};
        background-color: transparent;

        &:hover {
            border-color: #03131c;
            color: #03131c;
            background-color: transparent;
        }
    `}

    ${props => props.btnType === "primary"  && css<StyledBtnPropsType>`
        // primary
        background-color: ${props => props.color || "crimson"};
        color: bisque;

        &:hover {
            background-color: #03131c;
        }
    `}
    
    ${props=>props.active && css<StyledBtnPropsType>`
        box-shadow: 5px 5px 5px 5px rgba(201, 201, 231, 0.26);
    `}
`