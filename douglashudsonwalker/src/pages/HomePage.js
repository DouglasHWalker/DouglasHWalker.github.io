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
                    <p>Building optimised, user-centric business solutions. Systems engineer and full-stack developer (MERN and ASP.NET).</p>
                </div>
                <div className='image-container'>
                    <img className='about-headshot' src={headshot} />
                </div>
            </div>
            {/* <div className='title' id="about"> */}
            {/* <div> */}
            {/* <h1 className='hero-name'>Douglas Hudson Walker</h1>
                <h2 className='tagline'>Software Engineer</h2> */}
            {/* A series of flipping taglines which describe all the things I do. */}
            {/* </div>
                <div> */}
            {/* <p className='intro'>Douglas Hudson Walker is an Australian Software Engineer and Researcher. He earned his <span style={{ color: "var(--accent-color)" }}>Bachelor of Software Engineering</span> from the University of South Australia and completed his <span style={{ color: "var(--accent-color)" }}>postgraduate honours</span> at the University of Melbourne.</p>
                <p className='intro'>He is an application developer at <span style={{ color: "var(--accent-color)" }}>DXC Technology</span>, and is a <span style={{ color: "var(--accent-color)" }}>research assistant</span> at the Research Center for Interactive Virtual Environments. He has experience designing, building, and deploying <span style={{ color: "var(--accent-color)" }}>production ready applications</span> and has helped to <span style={{ color: "var(--accent-color)" }}>optimise humanitarian crisis response, decipher news veracity, and personalise online education</span>.</p> */}
            {/* </div> */}
            {/* <Link className='call-to-action-link' to="/about">See my Work!</Link> */}
            {/* <div className="down-arrow"><p></p></div> */}
            {/* </div> */}
            <ProjectList projects={projectContent} />
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