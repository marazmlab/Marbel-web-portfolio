import React from "react";
import { NavLink } from "react-router-dom";
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

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        ul {
            flex-direction: column;
            gap: 0.5rem;
            font-size: 0.8rem;
            margin-bottom: 1rem;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        border-bottom: 1px solid ${({theme}) => theme.text};
    }
`

const StyledNavLink = styled(NavLink)`
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.2s;

    &:hover,
    &.active {
        border-bottom: 1px solid ${({theme}) => theme.text};
    }

`

const Navbar = () => (

    <Nav>
        <ul>
            <li><StyledNavLink to='/'>Home</StyledNavLink></li>
            <li><StyledNavLink to='/portfolio'>Portfolio</StyledNavLink></li>
            <li><StyledNavLink to='/about'>About me</StyledNavLink></li>
            <li><StyledNavLink to='/contact'>Contact</StyledNavLink></li>
        </ul>
    </Nav>
);

export default Navbar;
