import React from "react";
import styled from 'styled-components';

import Button from './Button';
import Label from './Label';

const Card = styled.article`
    color: ${({ theme }) => theme.text};
    max-width: 700px;
    min-width: 800px;
    margin: 0 0 0 auto;
    border: 1px solid transparent;
    box-shadow: 8px 8px 0px 0px transparent;
    padding: 1rem;

    &:hover {
        border: 1px solid ${({theme}) => theme.text};
        box-shadow: 8px 8px 0px 0px ${({ theme }) => theme.text};
    }

    h3 {
        margin-top: 0;
        font-size: 2rem;
        letter-spacing: 0cap.02rem;
    }

    p {
        margin: 0;
        line-height: 1.6;
    }

    @media (max-width: 600px) {
        margin: 0 1rem;
    }
`;

const renderRichText = (blocks) => 
    blocks.map((block, i) => {
        if (block.type === 'paragraph') {
            return <p key={i}>{block.children.map((child, j) => child.text).join('')}</p>;
        }
        return null;
    });

const ProjectItem = ({ title, description, githubRepoUrl, behanceUrl, demoUrl, categories }) => {
    let buttonHref= null;
    if (githubRepoUrl) {
        buttonHref = githubRepoUrl;
    } else if (behanceUrl) {
        buttonHref = behanceUrl;
    } else if (demoUrl) {
        buttonHref = demoUrl;
    }

    return (
        <Card>
            {categories && categories.length > 0 && (
                <div>
                    {categories.map((cat, i) => (
                        <Label key={i}>{cat.name}</Label>
                    ))}
                </div>
            )}
            <h3>{title}</h3>
            {Array.isArray(description)
                ? renderRichText(description)
                : <p>{description}</p>
            }
            {buttonHref && <Button href={buttonHref} />}
        </Card>
    );
}

export default ProjectItem;