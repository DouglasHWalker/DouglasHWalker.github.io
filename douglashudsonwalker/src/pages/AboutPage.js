import React from 'react';
import headshot from '../images/Headshot.png'

const AboutPage = () => (
    <>
        <div className='about-container'>
            <div className='about'>
                <h1>About Me</h1>
                <p>
                    I’m a full-stack engineer with a dream of using cutting-edge technology to solve the world’s most challenging problems. I enjoy contributing to solutions at every level of abstraction, bridging my insights into each stage of development. 
                </p>
                <p>
                    So far I’ve helped to optimise humanitarian crisis response, build financial algorithms, decipher news veracity, predict Premier League results, and personalise online education for individuals. By building practical software tools with high usability, we can extend humanity’s capabilities and transform the world for the better!
                    
                </p>
                <p>
                    I have a breadth of experience using native and cross-platform development stacks. I have delivered solutions using many innovative technologies, including machine learning, augmented reality, the Internet of Things, and Big Data. Here are some of my favourite technologies to work with:
                </p>
                <ul className='about-tech' >
                    <li>C++</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>React Native</li>
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