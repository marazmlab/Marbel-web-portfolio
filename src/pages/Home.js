import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.section`
    color: ${({ theme }) => theme.text};
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 2;
    letter-spacing: 0.2em;
    text-align: right;
    max-width: 610px;
    margin: 0 0 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 1rem;
    }

`;

const Home = () => {

    const HometContent = `
    I built this to learn. And to have something to show. 
    `;
    return (
        <HomeWrapper>
            <div dangerouslySetInnerHTML={{ __html: HometContent }} />
        </HomeWrapper>
    );
}

export default Home;