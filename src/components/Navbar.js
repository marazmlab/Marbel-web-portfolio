import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ThemeToggle from "./ThemeToggle";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    ul {
        display: flex;
        gap: 1.5rem;
        margin: 0;
        padding: 0;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        ul {
            flex-direction: column;
            gap: 0.5rem;
        }
    }
`

const Navbar = ({ theme, toggleTheme }) => (
    <Nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/about'>About me</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </Nav>
);

export default Navbar;
