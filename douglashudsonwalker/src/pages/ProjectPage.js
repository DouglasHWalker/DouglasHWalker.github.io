import React from 'react';
import { useParams } from 'react-router-dom';
import projectContent from '../data/project-content';
import ProjectsList from '../components/ProjectList';
import NotFoundPage from './NotFoundPage';

import '../styles/ProjectPage.css';

const ProjectPage = (props) => {
    const { id } = useParams();
    const project = projectContent.find(project => project.id == id);
    const projects = projectContent.sort((p1, p2) => Date.parse(p1.dateClosed) > Date.parse(p2.dateClosed));

    if (!project) return <NotFoundPage />

    const otherProjects = projectContent.filter(project => project.id !== id)

    return (
        <>
            <h2 style={{ width: '100%' }}>
                <span className='highlight' style={{ fontSize: '3rem' }}>Portfolio</span> <br />
                DXC Technology Pty Ltd<br />
            </h2>
            <div>
                <p>
                    During my time at DXC Technology, I gained invaluable experience as a full-stack developer, utilizing an array of technologies such as C#, .NET Framework, MS SQL, JavaScript, HTML, CSS, Bootstrap,
                    and several JavaScript libraries. Not only did I sharpen my skills, but I also had the opportunity to apply them in real-world projects, recieving positive feedback for my proactive approach,
                    problem-solving, initiative, high-quality work, and for going above and beyond my expectations and responsibilities.
                    <br />
                    <br />
                    I also participated actively, in daily standup meetings, weekly project meetings, and requirements gathering sessions. I was even given the chance to showcase my work to key stakeholders and the APAC executive team,
                    making it an unforgettable experience. One of the major highlights of the internship was the opportunity to redesign and implement a software architecture that improved the modularity, maintainability,
                    performance, scalability, and usability of the project. My work was well-received by my colleagues and bosses, as it provided a clear strategy and prototype for improving the project's success and user experience.
                    <br />
                    <br />
                    Through this internship, I was able to make a significant impact on the project, doubling the average lines per day for a Junior Developer and working on many new features and enhancements.
                    I am proud to showcase my portfolio of work and am honored to have had the opportunity to work with such a talented team and grateful for the valuable experience I gained.
                </p>
                <p>
                    <br/>
                    NOTE: You are using the pdf version of this portfolio.  <br/>A web version is available here:
                    <a href='https://douglashwalker.github.io' className='accent' style={{marginLeft: '8px'}}>douglashwalker@github.io</a>

                </p>
            </div>
            <h2 className='highlight' style={{ marginLeft: '25%', fontSize: '1.5rem', textAlign: 'center', marginBottom: '0px' }}>Quick Stats</h2>
            <div style={{ width: '100%', justifyContent: 'center', display: 'flex', marginTop: '8px' }}>
                <table style={{ width: '50%', minWidth: '300px' }}>
                    <tbody>
                    <tr>
                        <th>Total Items Closed</th>
                        <td>{projects.length}</td>
                    </tr>
                    <tr>
                        <th>Lines Added</th>
                        <td>10696</td>
                    </tr>
                    <tr>
                        <th>Lines Deleted</th>
                        <td>7103</td>
                    </tr>
                    <tr>
                        <th>Daily LoC</th>
                        <td>{Math.round((10696 + 7103) / Math.round(((Math.max(...projects.map(p => new Date(p.dateClosed))) - Math.min(...projects.map(p => new Date(p.dateClosed)))) / (1000 * 60 * 60 * 24)) * 0.7142857))}</td>
                    </tr>
                    <tr>
                        <th>Avg. LoC for Junior</th>
                        <td>{100}</td>
                    </tr>
                    <tr>
                        <th>Enhancements</th>
                        <td>{projects.filter(p => p.labels.some((e) => e == "Enhancement")).length}</td>
                    </tr>
                    <tr>
                        <th>Bugs</th>
                        <td>{projects.filter(p => p.labels.some((e) => e == "Bug")).length}</td>
                    </tr>
                    <tr>
                        <th>Value Points</th>
                        <td>{projects.reduce((acc, p) => acc + p.valuePoints, 0)}</td>
                        </tr>
                        </tbody>
                </table>
                {/* <p>Total days in team: {Math.round((Math.max(...projects.map(p => new Date(p.dateClosed))) - Math.min(...projects.map(p => new Date(p.dateClosed)))) / (1000 * 60 * 60 * 24))}</p><br/> */}
            </div>
            {/* <h2 style={{ width: '100%', fontSize: '1.5rem', marginBottom: '0' }}>
                <span className='highlight' style={{ fontSize: '1.5rem', textAlign: 'center' }}>Development Work</span> 
            </h2> */}
            <div className="steps">
                {projects.map((project, key) => (
                    <div key={key} className="steps-container">
                        <div className="content" style={{ maxWidth: "100%", width: "-webkit-fill-available" }}>
                            <h2 style={{ margin: "0 0 8px 0" }}>{project.title} <span className='highlight'>#{project.id}</span></h2>
                            {project.summary.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                            <br />
                            <br />

                            <h3 style={{ display: (project.highlights) ? '' : 'none' }}>Highlights</h3>
                            <ul style={{ display: (project.highlights) ? '' : 'none' }}>
                                {project?.highlights?.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                            <h3 style={{ display: (project.requirements[0]) ? '' : 'none' }}>Requirements</h3>
                            <ul style={{ display: (project.requirements[0]) ? '' : 'none' }}>
                                {project.requirements.map((item, index) => (
                                    <li key={index}><label className="requirement" htmlFor={index}>{item}</label></li>
                                ))}
                            </ul>

                            <h3 style={{ display: (project.solution[0]) ? '' : 'none' }}>Solution</h3>
                            <ul style={{ display: (project.solution[0]) ? '' : 'none' }}>
                                {project.solution.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                            <br style={{ display: (project.highlights && project.requirements && project.solution && project.image) ? '' : 'none' }} />

                            <img src={project.image} style={{ maxWidth: "100%", display: (project.image) ? '' : 'none' }} />
                            <br style={{ display: (project.image) ? '' : 'none' }} />
                            <br style={{ display: (project.image) ? '' : 'none' }} />

                            <div className='quickLook'>
                                <div className='tech'>
                                    {project.labels.map((item, index) => (
                                        <p key={index}>{item}</p>
                                    ))}
                                </div>
                                <p><span>Add/Del</span></p>
                            </div>
                            <div className='quickLook'>
                                <div className='tech'>
                                    {project.technologies.map((item, index) => (
                                        <p key={index}>{item}</p>
                                    ))}
                                </div>
                                <p><span className='additions'>+{project.additions}</span><span className='deletions'>-{project.deletions}</span></p>
                            </div>
                        </div>
                        <i className="step-line"></i>
                        <div className="date">{project.dateClosed}</div>
                    </div>
                ))}
            </div>

            <ProjectsList projects={otherProjects} />
        </>
    );
}

export default ProjectPage;