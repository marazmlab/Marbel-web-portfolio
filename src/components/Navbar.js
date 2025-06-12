import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ul {
        display: flex;
        flex-direction: column;
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

const Navbar = () => (

    <Nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/about'>About me</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
    </Nav>
);

export default Navbar;
