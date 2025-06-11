import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import Footer from "./Footer";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    min-height: 100vh;


    @media (max-width: 900px) {
        padding: 1rem;
    }
    @media (max-width: 600px) {
        padding: 0.5rem;
    }
`;

const Main = styled.main`
    flex: 1;
`

const Layout = ({ children, theme, toggleTheme }) => (
    <Wrapper>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Main>{children}</Main>
        <Footer />
    </Wrapper>
);

export default Layout;