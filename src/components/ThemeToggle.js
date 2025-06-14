import React from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
    display: inline-block;
    width: auto;
    min-width: 0;
    background: none;
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({theme}) => theme.text};
    box-shadow: 6px 6px 0px 0px ${({ theme }) => theme.text};
    padding: 0.5rem 1rem;
    font-size: 1rem;
    width: auto;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 0.8rem;
        font-weight: 200;
        box-shadow: 3px 3px 0px 0px ${({ theme }) => theme.text};
    }

`;

const ThemeToggle = ({ theme, toggleTheme }) => (
    <ToggleButton onClick={toggleTheme}>
        {theme === 'dark' ? 'Light mode' : 'Dark mode'}
    </ToggleButton>
);

export default ThemeToggle;