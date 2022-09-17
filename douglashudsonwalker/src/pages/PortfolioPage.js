import React from 'react';
import { useParams } from 'react-router-dom';
import projectContent from './project-content';
import PortfolioList from '../components/PortfolioList';
import NotFoundPage from './NotFoundPage';

const PortfolioPage = (props) => {
    const { name } = useParams();
    const project = projectContent.find(project => project.name === name);

    if (!project) return <NotFoundPage />
    document.getElementsByTagName("nav")[0].style.display = "none";

    const otherProjects = projectContent.filter(project => project.name !== name)
    
    return (
        <>
            <div style={{marginTop: "150px"}}>
                <h1>{project.title}</h1>
                {project.content.map((paragraph, key) => (
                    <p key={key}>{paragraph}</p>
                ))}
                <img src={project.image} />
                <h3>Other Articles:</h3>
                <PortfolioList portfolio={otherProjects} />
            </div>
        </>
    );
}

export default PortfolioPage;