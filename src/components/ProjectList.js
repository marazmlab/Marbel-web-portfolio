import React from "react";
import styled from "styled-components";

import ProjectItem from './ProjectItem';

const List = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 900px) {
        grid-template-columns: auto(2, 1fr);
    }
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

const ProjectList = ({ projects }) => (
    <List>
        {projects.map(project => (
            <ProjectItem key={project.id} {...project}/>
        ))}
    </List>
);

export default ProjectList;