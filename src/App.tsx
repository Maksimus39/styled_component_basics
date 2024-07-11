import React from 'react';
import './App.css';
import {StyledBtn} from "./components/Button.styled";
import {Box} from "./components/Box.styled.";
import {myTheme} from "./styles/Theme.styled";

function App() {
    return (
        <div className="App">

            <Box>

                {/*<StyledBtn color={"green"} fontSize={"20"}>Hello</StyledBtn>*/}
                {/*<StyledBtn color={"red"}>Hello</StyledBtn>*/}
                {/*<StyledBtn fontSize={"30px"}>Hello</StyledBtn>*/}

                <StyledBtn color={myTheme.colors.secondary} btnType={"outlined"}>Hello</StyledBtn>
                <StyledBtn color={myTheme.colors.primary} btnType={"primary"} active>Hello</StyledBtn>


                {/*<input type={"text"}/>*/}
                {/*<input type={"submit"}/>*/}
            </Box>
        </div>
    );
}

export default App;


