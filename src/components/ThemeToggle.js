import React from "react";

const ThemeToggle = ({ theme, toggleTheme }) => (
    <button onClick={toggleTheme}>
        {theme === 'dark' ? 'Light mode' : 'Dark mode'}
    </button>
);

export default ThemeToggle;