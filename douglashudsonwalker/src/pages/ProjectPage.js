import React from 'react';
import { useParams } from 'react-router-dom';
import projectContent from '../data/project-content';
import ProjectsList from '../components/ProjectList';
import NotFoundPage from './NotFoundPage';

import '../styles/ProjectPage.css';

const ProjectPage = (props) => {
    const { id } = useParams();
    const project = projectContent.find(project => project.id == id);
    const projects = projectContent.sort((p1, p2) => Date.parse(p1.dateClosed) < Date.parse(p2.dateClosed));

    if (!project) return <NotFoundPage />

    const otherProjects = projectContent.filter(project => project.id !== id)

    return (
        <>
            <div class="steps">
                {projects.map((project, key) => (
                    <div class="steps-container">
                        <div class="content" style={{ maxWidth: "100%" }}>
                            <h2 style={{ margin: "0 0 8px 0" }}>{project.title} <span className='highlight'>#{project.id}</span></h2>
                            {project.summary.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                            <div className='quickLook'>    
                                <div className='tech'>
                                    {project.labels.map((item, index) => (
                                        <p key={index}>{item}</p>
                                        ))}
                                </div>
                                <p><span className='additions'>+{project.additions}</span><span className='deletions'>-{project.deletions}</span></p>
                            </div>
                            <div className='quickLook'>  
                                <div className='tech'>
                                    {project.technologies.map((item, index) => (
                                        <p key={index}>{item}</p>
                                        ))}
                                </div>
                                <p>SP-<span >{(project.valuePoints / project.complexity).toFixed(2)}</span></p>
                            </div>
                            <br />
                            <h3>Highlights</h3>
                            <ul>
                                {project.highlights.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                            <h3>Requirements</h3>
                            <ul>
                                {project.requirements.map((item, index) => (
                                    <li key={index}><input id={index} type="checkbox" className='checkbox' defaultChecked={true} /><label className="requirement" for={index}>{item}</label></li>
                                ))}
                            </ul>
                            {/* <h3>Solution</h3>
                            <ul>
                                {project.solution.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul> */}
                            <img src={project.image} style={{ maxWidth: "100%" }} />
                        </div>
                        <i class="step-line"></i>
                        <div class="date">{project.dateClosed}</div>
                    </div>
                ))}
            </div>

            <ProjectsList projects={otherProjects} />
        </>
    );
}

export default ProjectPage;