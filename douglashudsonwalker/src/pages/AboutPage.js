import React from 'react';
import headshot from '../images/Headshot.png'

const AboutPage = () => (
    <>
        <div className='about-container'>
            <div className='about'>
                <h1>About Me</h1>
                <p>
                    It took some time to appreciate this, but the experience I value most is learning. I’m a highly open individual, interested in many domains. That is why I find so much value in learning STEM and programming, because it opens the doors to working in virtually any industry. My ideal role would have me involved in every phase of development. In the past, I have enjoyed contributing to both front and back-end development, designing and architecting solutions, and influencing project direction and ideation.
                </p>
                <p>
                    I’d like to work on the world’s most challenging problems. I believe that building practical software tools, with high usability, can extend humanity’s capabilities and transform the world for the better! So far, I’ve helped to optimise humanitarian crisis response, build financial algorithms, decipher news veracity, and personalise online education for individuals.
                </p>
                <p>
                    I love working with innovative technology. By using the latest tools, we can achieve solutions that would be otherwise unattainable. I’ve worked with machine learning, augmented reality, the Internet of Things, computational simulation, big data, reinforcement learning and many others. Here are some of my favourite tools for building solutions:
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