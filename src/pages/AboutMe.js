import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
    color: ${({ theme }) => theme.text};
    font-size: 1.15rem;
    line-height: 2;
    letter-spacing: 0.1em;
    text-align: right;
    max-width: 610px;
    margin: 0 0 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 0.8rem;
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


const AboutMe = () => {
    const [about, setAbout] = useState(null);

    useEffect(() => {
        fetch('http://localhost:1337/api/about-mes?populate=*')
            .then(res => res.json())
            .then(data => setAbout(data.data));
    }, []);

    if (!about) return <p>Loading...</p>;

    const aboutItem = Array.isArray(about) ? about[0] : about;

    return (
    <AboutWrapper>
        {aboutItem && aboutItem.content && (
        Array.isArray(aboutItem.content)
            ? aboutItem.content.map((block, idx) => (
                <p key={idx}>{block.children ? block.children.map(child => child.text).join('') : ''}</p>
            ))
            : <div dangerouslySetInnerHTML={{ __html: aboutItem.content }} />
        )}
    </AboutWrapper>
);
}

export default AboutMe;