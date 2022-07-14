import React from "react";
import { Link } from 'react-router-dom';

const ProjectPage = ({projects}) => (
    <>
        {projects.map((project, key) => (
            <Link className='article-list-item' key={key} to={`/project/${project.name}`}>
                <h3>{project.title}</h3>
                <p>{project.content[0].substring(0, 150)}...</p>
            </Link>
        ))}
    </>
);

export default ProjectPage;