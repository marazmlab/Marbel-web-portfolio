import React from "react";
import styled from "styled-components";

import ThemeToggle from "./ThemeToggle";

const HeadWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0 0 2rem 0;
`;

const Info = styled.div`
    text-align: left;
`

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: lighter;
`;

const Tagline = styled.p`
  font-size: 1.2rem;
  font-weight: lighter;
`;

const Head = ({theme, toggleTheme}) => (
    <HeadWrapper>
        <Info>
            <Name>Marek Bełz</Name>
            <Tagline>Designer & Developer</Tagline>
        </Info>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme}/>
    </HeadWrapper>
);

export default Head;