import React from 'react';
import './App.css';
import {StyledBtn} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {SuperButton} from "./components/SuperButton.styled";
import {Box} from "./components/Box.styled.";
import {Menu} from "./components/Menu.styled.";

function App() {
    return (
        <div className="App">

            <Menu>
                <ul>
                    <li><a href="">menu item 1</a></li>
                    <li><a href="">menu item 2</a></li>
                    <li><a href="">menu item 3</a></li>
                </ul>
            </Menu>

            <Box>
                <StyledBtn as={Link} href="#">LinkComponent</StyledBtn>
                <StyledBtn as="a" href="#">Link</StyledBtn>
                <StyledBtn>Hello World</StyledBtn>
                <SuperButton>Hello</SuperButton>
            </Box>
        </div>
    );
}

export default App;


