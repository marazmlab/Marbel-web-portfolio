import React from "react";
import styled from "styled-components";

import ThemeToggle from "./ThemeToggle";

const HeadWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0 0 2rem 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin: 0 0 1rem 0;
    }
`;

const Info = styled.div`
    text-align: left;
`

const Name = styled.h1`
    font-size: 3rem;
    font-weight: 300;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 2rem;
        margin: 0;
    }
  
`;

const Tagline = styled.p`
    font-size: 1.2rem;
  
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1rem;
    }
`;

const Head = ({theme, toggleTheme}) => (
    <HeadWrapper>
        <Info>
            <Name>Marek Bełz</Name>
            <Tagline>Frontend Developer & Designer</Tagline>
        </Info>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme}/>
    </HeadWrapper>
);

export default Head;