import React from 'react';
import headshot from '../images/Headshot.png'

const ExperiencePage = () => (
    <>
        <div className='about-container'>
            <div className='about'>
                <h1>Experiences </h1>
                <p>
                    I’m a full-stack engineer with a single purpose. To work on the world’s most challenging problems. I believe that building practical software tools, with high usability, can extend humanity’s capabilities and transform the world for the better!
                </p>
                <p>
                    So far I’ve helped to optimise humanitarian crisis response, build financial algorithms, decipher news veracity, predict Premier League results, and personalise online education for individuals.
                </p>
                <p>
                    I love working with innovative technology. By using the latest tools we can build solutions which would be otherwise unachievable. I've worked with machine learning, augmented reality, the Internet of Things, computational simulation, big data, reinforcement learning and many others. Here are some of my favourite tools for building solutions:
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

export default ExperiencePage;