import React from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
    display: inline-block;
    width: auto;
    min-width: 0;
    background: none;
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({theme}) => theme.text};
    padding: 0.5rem 1rem;
    font-size: 1rem;
    width: auto;
    cursor: pointer;
`;

const ThemeToggle = ({ theme, toggleTheme }) => (
    <ToggleButton onClick={toggleTheme}>
        {theme === 'dark' ? 'Light mode' : 'Dark mode'}
    </ToggleButton>
);

export default ThemeToggle;