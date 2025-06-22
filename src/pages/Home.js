import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.section`
    color: ${({ theme }) => theme.text};
    font-size: 1.15rem;
    line-height: 2;
    letter-spacing: 0.2em;
    text-align: right;
    max-width: 610px;
    margin: 0 0 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 0.8rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 1rem;
    }

    & p {
    margin-bottom: 1.2em;
    }
    & ul, & ol {
        margin-left: 2em;
        margin-bottom: 1.2em;
    }
    & li {
        margin-bottom: 0.5em;
    }
    & h1, & h2, & h3 {
        margin-top: 1.5em;
        margin-bottom: 0.7em;
        font-weight: bold;
    }
    & br {
        display: block;
        margin-bottom: 1em;
        content: '';
    }
`;

const Home = () => {

    const HometContent = `
    I’m Marek Bełz, a Junior Frontend Developer on a mission to grow and learn every day. Armed with React and modern JavaScript. 

    `;
    return (
        <HomeWrapper>
            <div dangerouslySetInnerHTML={{ __html: HometContent }} />
        </HomeWrapper>
    );
}

export default Home;