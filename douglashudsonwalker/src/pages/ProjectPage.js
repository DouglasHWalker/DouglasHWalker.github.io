import React from 'react';
import { useParams } from 'react-router-dom';
import projectContent from './project-content';
import ProjectsList from '../components/ProjectList';
import NotFoundPage from './NotFoundPage';

const ProjectPage = (props) => {
    const { name } = useParams();
    const project = projectContent.find(project => project.name === name);

    if (!project) return <NotFoundPage />

    const otherProjects = projectContent.filter(project => project.name !== name)

    return (
        <>
            <div style={{marginTop: "150px"}}>
                <h1>{project.title}</h1>
                {project.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                <img src={project.image} />
                <h3>Other Articles:</h3>
                <ProjectsList projects={otherProjects} />
            </div>
        </>
    );
}

export default ProjectPage;