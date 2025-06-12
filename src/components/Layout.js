import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: lighter;
`;

const Tagline = styled.p`
  font-size: 1.2rem;
  font-weight: lighter;
  margin: 0 0 3rem 0;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 2rem;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.secondary};
  box-sizing: border-box;
  overflow: hidden;
  padding: 2rem;
`;

const Main = styled.main`
    flex: 1;
`

const Layout = ({ children, theme, toggleTheme }) => (
    <Wrapper>
        <Name>Marek Bełz</Name>
        <Tagline>Designer & Developer</Tagline>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Main>{children}</Main>
        <Footer />
    </Wrapper>
);

export default Layout;