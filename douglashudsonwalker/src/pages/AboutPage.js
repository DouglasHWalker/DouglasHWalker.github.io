import React from 'react';
import headshot from '../images/Headshot.png'

const AboutPage = () => (
    <>
        <div className='about-container' style={{ maxWidth: "900px" }}>
            <div className='about'>
                {/* <h1>About Me</h1> */}
                <p>Douglas Hudson Walker is an Australian Software Engineer and Researcher. He completed his <span style={{ color: "var(--accent-color)" }}>Bachelor of Software Engineering</span> from the University of South Australia and earned his <span style={{ color: "var(--accent-color)" }}>postgraduate honours</span> at the University of Melbourne.</p>
                <p>He is an application developer at <span style={{ color: "var(--accent-color)" }}>DXC Technology</span>, and a research assistant at the <span style={{ color: "var(--accent-color)" }}>Research Center for Interactive Virtual Environments.</span> He has experience designing, building, and deploying <span style={{ color: "var(--accent-color)" }}>distributed business applications</span> and has also helped to optimise humanitarian crisis response, decipher news veracity, and personalise online education.</p>
                {/* <p>
                    My ideal role would involve working on the world's most challenging problems and have me contributing to every stage of a solution.
                    I’ve helped to <span className='highlight'>optimise humanitarian crisis response, decipher news veracity, automate financial planning, and personalise online education</span>. I've also worked on <span className='highlight'>digital transformation</span> for many fortune 500 companies and performed <span className='highlight'>research and development</span> with Australian universities, government, and defense.
                </p> */}
                {/* <p>
                    I've used many new and innovative technologies to deliver solutions, this includes Machine Learning, Augmented Reality, Computational Simulation, Big Data, IoT, Reinforcement Learning, and many others. Here are some of my favourite technolgies:
                </p> */}
                <ul className='about-tech' >
                    <li>Java</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>Swift</li>
                    <li>CI/CD</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                    <li>AWS</li>
                    <li>Azure</li>
                    <li>Design Patterns</li>
                    <li>ASP.NET MVC</li>
                    {/* <li>C++</li> */}
                    {/* <li>React Native</li> */}
                    {/* <li>Angular</li> */}
                    {/* <li>HTML</li>
                    <li>CSS</li>
                    <li>Node.js</li>
                    <li>Express.js</li> */}
                    {/* <li>Kotlin</li> */}
                    {/* <li>TypeScript</li> */}
                    {/* <li>C#</li> */}
                    {/* <li>MVVC</li> */}
                    {/* <li>SCRUM</li>
                    <li>Algorithms</li>
                    <li>Optimisation</li>
                    <li>Data Structures</li>
                    <li>NoSQL</li>
                    <li>Data Normalisation</li> */}
                    {/* <li>UML, ERD</li>
                    <li>PDDL</li> */}
                </ul>
            </div>
            <div className='image-container'>
                <img className='about-headshot' src={headshot} />
            </div>
        </div>
    </>
);

export default AboutPage;