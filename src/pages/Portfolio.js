import React, { useEffect, useState } from 'react';
import ProjectList from '../components/ProjectList';


const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Performance App",
      description: "A modern web application for analyzing, visualizing, and documenting website performance metrics",
      githubRepoUrl: "https://github.com/marazmlab/marazmlab",
      behanceUrl: "",
      demoUrl: "https://marbel-performance-dashboard-app.netlify.app/",
      categories: [{ name: "React" }, { name: "Frontend" }]
    },
    {
      id: 2,
      title: "Super Simple Task Menager ",
      description: "A (super) simple task manager app built with React, featuring a Node.js/Express backend (hosted on Render.com) and a frontend hosted on GitHub Pages.",
      githubRepoUrl: "https://github.com/marazmlab/Super-Simple-Task-Manager",
      behanceUrl: "",
      demoUrl: "https://marazmlab.github.io/Super-Simple-Task-Manager/",
      categories: [{ name: "Frontend" }]
    },
    {
      id: 3,
      title: "React Redux Calendar",
      description: "This projectis dedicated to practicing and mastering state management in React using Redux.",
      githubRepoUrl: "https://github.com/marazmlab/React-Redux-Calendar",
      behanceUrl: "",
      demoUrl: "https://marazmlab.github.io/React-Redux-Calendar/",
      categories: [{ name: "React" }, { name: "Frontend" }]
    },
    {
      id: 4,
      title: "React Redux React Form Component",
      description: "This project showcases my ability to design and implement modern, user-friendly forms using React and Styled Component.",
      githubRepoUrl: "https://github.com/marazmlab/React-Form-Component",
      behanceUrl: "",
      demoUrl: "",
      categories: [{ name: "React" }]
    },
    {
      id: 5,
      title: "React Kanban Board",
      description: "This repository is dedicated to practicing and showcasing modern frontend skills using React by building a Kanban board application.",
      githubRepoUrl: "",
      behanceUrl: "https://github.com/marazmlab/React-Kanban-Board?tab=readme-ov-file",
      demoUrl: "https://marazmlab.github.io/React-Kanban-Board/",
      categories: [{ name: "Frontend" }]
    },
    {
      id: 7,
      title: "Kriss Serwis Visual Identification and Page",
      description: "A visual identity for a construction company and a website sketch. My front-end beginnings ;)",
      githubRepoUrl: "",
      behanceUrl: "https://www.behance.net/gallery/140819615/KRISS-SERWIS-BRAND",
      demoUrl: "https://lordmarazm.github.io/Kriss-Serwis/",
      categories: [{ name: "Frontend" }, { name: "Design" }]
    },
    {
      id: 8,
      title: "Sagra Technology Landing Page",
      description: "A simple landing page that I created as a recruitment assignment.",
      githubRepoUrl: "",
      behanceUrl: "https://www.behance.net/gallery/133358693/LANDING-PAGE-SAGRA-TECHNOLOGY",
      demoUrl: "",
      categories: [{ name: "Design" }]
    },

  ];


  // const [projects, setProjects] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //     fetch('https://marbel.tech/api/projects?populate=*')
  //         .then(res => res.json())
  //         .then(data => {
  //             setProjects(data.data);
  //             setLoading(false);
  //         });
  // }, []);

  // if (loading) return <p>Loading projects...</p>

  return <ProjectList projects={projects} />;
};

export default Portfolio;