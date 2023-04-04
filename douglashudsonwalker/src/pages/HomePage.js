import React from 'react';

import AboutPage from './AboutPage';
import ExperiencePage from './ExperiencePage';
import ProjectList from '../components/ProjectList';
import ContactPage from './ContactPage';
import headshot from '../images/Headshot.png'

import projectContent from '../data/project-content';
import flashcardContent from '../data/flashcard-content';
import Flashcard from '../components/Flashcard';

const HomePage = () => {
    return (
        <>  
            <div className='portfolio-header'>
                <div>
                    <h1>Douglas Hudson Walker</h1>
                    <h3>Application Developer at <span className='highlight'>DXC Technology</span></h3>
                    <p>Software engineer and full-stack developer (MERN and ASP.NET).</p>
                </div>
                <div className='image-container'>
                    <img className='about-headshot' src={headshot} />
                </div>
            </div>
            
            <ProjectList projects={projectContent} />
            <div className='' id="about">
            {/* <div> */}
            {/* <h1 className='hero-name'>Douglas Hudson Walker</h1>
                <h2 className='tagline'>Software Engineer</h2> */}
            {/* A series of flipping taglines which describe all the things I do. */}
            {/* </div> */}
                <div style={{fontSize: '1rem', padding: '0 100px'}}>
                    <p className='intro'>Douglas Hudson Walker is an Australian Software Engineer. He earned his <span style={{ color: "var(--accent-color)" }}>Bachelor of Software Engineering (Honours)</span> cross-institutionally from the University of South Australia and the University of Melbourne.</p>
                    <p className='intro'>He is currently an <span style={{ color: "var(--accent-color)" }}>application developer</span> at DXC Technology, and a <span style={{ color: "var(--accent-color)" }}>research developer</span> at the Research Center for Interactive Virtual Environments. </p>
                    <p className='intro'>He has <span style={{ color: "var(--accent-color)" }}>full-stack experience</span> in every stage of the SDLC: designing, building, and deploying production ready applications in <span style={{ color: "var(--accent-color)" }}>cross-functional teams</span>. He has helped to optimise humanitarian crisis response, decipher news veracity, and individualise online education.</p>
                </div>
            {/* <Link className='call-to-action-link' to="/about">See my Work!</Link> */}
            {/* <div className="down-arrow"><p></p></div> */}
            </div>
            <ExperiencePage id="experience" />
            <Flashcard flashcards={flashcardContent} />
            {/* <p className='quote' style={{ marginTop: "64px" }}>“Uncertainty is an uncomfortable position. But certainty is an absurd one." - <span style={{ fontWeight: "bold", color: "var(--accent-color)" }}>Voltaire.</span></p> */}
            {/* <AboutPage /> */}
            <p className='quote' style={{ marginTop: "32px" }}>"Civilization advances by extending the number of important operations which we can perform without thinking about them." - <span style={{ fontWeight: "bold", color: "var(--accent-color)" }}>Alfred North Whitehead.</span></p>
            <ContactPage />
        </>
    );
}

export default HomePage;