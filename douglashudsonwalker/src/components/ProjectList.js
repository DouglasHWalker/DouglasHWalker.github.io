import React from "react";
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => (
    <>
        <ul className='project-list'>
        {projects.map((project, key) => (
            <li key={key} className='project-list-item'>
                
                <div className="list_item_content">
                    <h3>{project.title}</h3>
                    <p>{project.content[0].substring(0, 150)}...</p>
                    <div className="tech">
                        {project.technologies.map((tech, key) => (
                            <p>{tech}</p>
                        ))}
                    </div>
                </div>
                <Link to={`/project/${project.name}`}>
                    <img src={project.image} />
                </Link>
            </li>
        ))}
        </ul>
    </>
);

export default ProjectList;