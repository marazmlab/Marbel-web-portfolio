import React, { useEffect, useState} from 'react';
import ProjectList from '../components/ProjectList';


const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://marbel.tech/api/projects?populate=*')
            .then(res => res.json())
            .then(data => {
                setProjects(data.data);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading projects...</p>

    return <ProjectList projects={projects}/>;
};

export default Portfolio;