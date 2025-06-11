import React from 'react';
import ProjectList from '../components/ProjectList';

const projects = [
    {id: 1, title: 'Project 1', description: 'Opis projektu 1,'},
    {id: 2, title: 'Project 2', description: 'Opis projektu 2,'},
]

const Portfolio = () => (
    <>
        <ProjectList projects={projects}/>
    </>
);

export default Portfolio;