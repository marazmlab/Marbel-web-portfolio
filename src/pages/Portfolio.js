import React, { useEffect, useState} from 'react';
import ProjectList from '../components/ProjectList';


const Portfolio = () => {
    const projects = [
  {
    id: 1,
    title: "My Repositories",
    description: "Where I code, learn, and break things",
    githubRepoUrl: "https://github.com/marazmlab?tab=repositories",
    behanceUrl: "",
    demoUrl: "",
    categories: [{ name: "Frontend" }]
  },
  {
    id: 2,
    title: "My Behance",
    description: " I started in design — now I bring that mindset into front-end work.",
    githubRepoUrl: "",
    behanceUrl: "https://www.behance.net/belzmareka716",
    demoUrl: "",
    categories: [{ name: "Design" }]
  },
  {
    id: 3,
    title: "React Redux Calendar",
    description: "This projectis dedicated to practicing and mastering state management in React using Redux.",
    githubRepoUrl: "https://github.com/marazmlab/React-Redux-Calendar",
    behanceUrl: "",
    demoUrl: "",
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
    title: "Kriss Serwis Visual Identification and Page",
    description: "A visual identity for a construction company and a website sketch. My front-end beginnings ;)",
    githubRepoUrl: "",
    behanceUrl: "https://www.behance.net/gallery/140819615/KRISS-SERWIS-BRAND",
    demoUrl: "",
    categories: [{ name: "Frontend" }, { name: "Design" }]
  },
  {
    id: 6,
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

    return <ProjectList projects={projects}/>;
};

export default Portfolio;