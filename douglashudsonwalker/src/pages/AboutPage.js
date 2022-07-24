import React from 'react';
import headshot from '../images/Headshot.png'

const AboutPage = () => (
    <>
        <div className='about-container'>
            <div className='about'>
                <h1>About Me</h1>
                <p>
                    My name is Douglas and I'm a problem solver. I've dedicated myself to learning, and to building software solutions. My ideal role would involve working on the world's most challenging problems. I believe that by building practical tools, with high usability, we can extend humanity’s capabilities and transform the world for the better!
                </p>
                <p>
                    So far, I’ve helped to <span className='highlight'>optimise humanitarian crisis response, decipher news veracity, automate financial planning, and personalise online education</span>. I've also worked on <span className='highlight'>digital transformation</span> for many fortune 500 companies and performed <span className='highlight'>research and development</span> tasks with Australian universities, government, and defense.
                </p>
                <p>
                    I love to work with innovative technology and in the past I have used Machine Learning, Augmented Reality, Computational Simulation, Big Data, IoT, Reinforcement Learning, and many others. Here are some of my favourite tools for building solutions:
                </p>
                <ul className='about-tech' >
                    <li>C++</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>React Native</li>
                    <li>Angular</li>
                    {/* <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Express.js</li> */}
                    <li>Kotlin</li>
                    <li>Swift</li>
                    {/* <li>ASP.NET MVC</li> */}
                    <li>AWS</li>
                    <li>Azure</li>
                    {/* <li>TypeScript</li> */}
                    <li>CI/CD</li>
                    {/* <li>C#</li> */}
                    {/* <li>MVVC</li> */}
                    {/* <li>Design Patterns</li> */}
                    {/* <li>SCRUM</li>
                    <li>Algorithms</li>
                    <li>Optimisation</li>
                    <li>Data Structures</li>
                    <li>NoSQL</li>
                    <li>Data Normalisation</li> */}
                    <li>SQL</li>
                    <li>MongoDB</li>
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