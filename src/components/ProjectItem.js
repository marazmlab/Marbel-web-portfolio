import React from "react";
import styled from 'styled-components';

const Card = styled.article`
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.text};
    border-radius: 8px;
    padding: 1.5rem;

    @media (max-width: 600px) {
        margin: 0 1rem;
    }
`;

const ProjectItem = ({ title, description }) => (
    <Card>
        <h3>{title}</h3>
        <p>{description}</p>
    </Card>
);

export default ProjectItem;