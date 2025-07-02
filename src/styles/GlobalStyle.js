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
        overflow-x: hidden;
        transition: background 0.3s, color 0.3s;
        line-height: 1.6;
        scroll-behavior: smooth;
    }

    @media (max-width: 600px) {
        body {
            font-size: 1rem;
            padding: 0 0.5rem;
        }
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }



`;

export default GlobalStyle;