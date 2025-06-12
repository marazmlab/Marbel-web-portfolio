import React from "react";
import styled from "styled-components";

import Head from './Head'
import Navbar from "./Navbar";
import Footer from "./Footer";

const Outer = styled.div`
  position: fixed;
  top: 2rem;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.text};
  box-sizing: border-box;
  overflow: hidden;
  padding: 2rem;
`;

const Container = styled.div`
     display: flex;
     flex: 1;
     justify-content: space-between;
     min-height: 0;
`

const Sidebar = styled.aside`
    width: 220px;
    min-width: 180px;
    max-width: 260px;
    background: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: right;
    padding: 2rem;
    min-width: 0;
    min-height: 0;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
`

const Main = styled.main`
    flex: 1;
    min-height: 0;
`

const Layout = ({ children, theme, toggleTheme }) => (
    <Outer>
        <Head theme={theme} toggleTheme={toggleTheme}/>
        <Container>
            <Sidebar>
                <Navbar />
            </Sidebar>
            <Content>
                <Main>{children}</Main>
            </Content>
        </Container>
        {/* <Footer /> */}
    </Outer>
);

export default Layout;