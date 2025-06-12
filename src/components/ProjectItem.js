import React from "react";
import styled from 'styled-components';

const Card = styled.article`
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme}) => theme.text};
    padding: 1rem;
    text-align: right;

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