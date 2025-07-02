import React from "react";
import styled from "styled-components";

import ProjectItem from './ProjectItem';

const List = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

const ProjectList = ({ projects }) => (
    <List>
        {projects
            .filter(project => project && project.title)
            .map(project => (
                <ProjectItem 
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    githubRepoUrl={project.githubRepoUrl}
                    behanceUrl={project.behanceUrl}
                    demoUrl={project.demoUrl}
                    categories={project.categories}
                />
        ))}
    </List>
);

export default ProjectList;