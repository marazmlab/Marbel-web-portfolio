import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    body {
        background: ${({ theme}) => theme.background};
        color: ${({ theme }) => theme.text};
        margin: 0;
        overflow: hidden; 
        transition: background 0.3s, color 0.3s;
    }
`;

export default GlobalStyle;