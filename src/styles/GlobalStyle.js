import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background: ${({ theme}) => theme.background};
        color: ${({ theme }) => theme.text};
        min-height: 100vh;
        transition: background 0.3, color 0.3;
    }
`;

export default GlobalStyle;