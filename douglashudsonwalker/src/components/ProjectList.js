import React from "react";
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => (
    <>
        <div className='featured' id='projects'>
            <h2 className='highlight'>Projects</h2>
            {/* <p className='highlight'>View all</p> */}
            <ul className='project-list'>
                {projects.map((project, key) => (
                    <li key={key} className='project-list-item'>

                        <div className="list_item_content">
                            <h3>{project.title}</h3>
                            <p>{project.summary}</p>
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
        </div>
    </>
);

export default ProjectList;