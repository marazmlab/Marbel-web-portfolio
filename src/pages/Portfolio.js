import React from 'react';
import ProjectList from '../components/ProjectList';

const projects = [
    {id: 1, title: 'Project 1', description: 'Opis projektu 1,'},
    {id: 2, title: 'Project 2', description: 'Opis projektu 2,'},
    {id: 3, title: 'Project 2', description: 'Opis projektu 2,'},
    {id: 4, title: 'Project 2', description: 'Opis projektu 2,'},
    {id: 5, title: 'Project 2', description: 'Opis projektu 2,'},
    {id: 6, title: 'Project 2', description: 'Opis projektu 2,'},
    {id: 7, title: 'Project 2', description: 'Opis projektu 2,'},
    {id: 8, title: 'Project 2', description: 'Opis projektu 2,'},
    {id: 9, title: 'Project 2', description: 'Opis projektu 2,'},
    {id: 10, title: 'Project 2', description: 'Opis projektu 2,'},
    {id: 11, title: 'Project 2', description: 'Opis projektu 2,'},
]

const Portfolio = () => (
    <>
        <ProjectList projects={projects}/>
    </>
);

export default Portfolio;