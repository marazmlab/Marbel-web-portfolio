import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Lato', sans-serif;
        background: ${({ theme}) => theme.background};
        color: ${({ theme }) => theme.text};
        margin: 0;
        overflow: hidden; 
        transition: background 0.3s, color 0.3s;
        line-height: 1.6;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 2rem;
    }
`;

export default GlobalStyle;