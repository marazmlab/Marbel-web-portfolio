import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
    color: ${({ theme }) => theme.text};
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 2;
    letter-spacing: 0.2em;
    text-align: right;
    max-width: 610px;
    margin: 0 0 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 0.8rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 0.8rem;
    }
`;


const AboutMe = () => {

    const aboutContent = `
    I’m Marek Bełz, a Junior Frontend Developer on a mission to grow and learn every day. Armed with React and modern JavaScript. <br /><br />
    
    My background in graphic design, architecture and e-commerce photo retouch taught me to value usability, clarity and the user’s perspective, and im looking for environment to develop this mindset. <br /><br />

    I feel best in places where I can ask questions, tackle real-world challenges and expand my skill set. If you’re looking for someone who brings energy, curiosity and a willingness to dive into the deep end, let’s connect and build something together.


    `;

    return (
        <AboutWrapper>
            <div dangerouslySetInnerHTML={{ __html: aboutContent }} />
        </AboutWrapper>
    );

    // to change after strapi /railway problem solving 

    // const [about, setAbout] = useState(null);

    // useEffect(() => {
    //     fetch('https://marbel.tech/api/about-mes?populate=*')
    //         .then(res => res.json())
    //         .then(data => setAbout(data.data));
    // }, []);

    // if (!about) return <p>Loading...</p>;

    // const aboutItem = Array.isArray(about) ? about[0] : about;

    // return (
    //     <AboutWrapper>
    //         {aboutItem && aboutItem.content && (
    //         Array.isArray(aboutItem.content)
    //             ? aboutItem.content.map((block, idx) => (
    //                 <p key={idx}>{block.children ? block.children.map(child => child.text).join('') : ''}</p>
    //             ))
    //             : <div dangerouslySetInnerHTML={{ __html: aboutItem.content }} />
    //         )}
    //     </AboutWrapper>
    // );
}

export default AboutMe;