import React from "react";
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => (
    <>
        <div className='featured' id="contributions">
            <h2 className='highlight'>Recent Contributions</h2>
            <ul className='project-list'>
                {projects.slice(0, 3).map((project, key) => (
                    <li key={key} className='project-list-item'>

                        <Link to={`/project/${project.id}`}>
                            <div className="list_item_content">
                                <h3>{project.title}</h3>
                                <p>{project.summary.toString().slice(0, 100)}</p>
                                <div className="tech">
                                    {project.technologies.map((tech, key) => (
                                        <p key={key}>{tech}</p>
                                    ))}
                                </div>
                                <p className="project-timestamp">{project.dateClosed}</p>
                            </div>
                            {/* <img src={project.image} /> */}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </>
);

export default ProjectList;