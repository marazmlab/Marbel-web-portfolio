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
  padding: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 1rem;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    padding: 1rem;
  }
`;

const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    min-height: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
    }
`;

const Sidebar = styled.aside`
    width: 220px;
    min-width: 180px;
    max-width: 260px;
    background: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
        margin-bottom: 1rem;
    }

`

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: right;
    min-width: 0;
    min-height: 0;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        text-align: left;
        width: 100%;
        padding: 1rem 0.5rem;
    }
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