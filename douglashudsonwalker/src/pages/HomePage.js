import React from 'react';

import ProjectList from '../components/ProjectList';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ExperiencePage from './ExperiencePage';
import projectContent from './project-content';
import { useRef, useEffect } from 'react';

const HomePage = () => {
    const tagline = useRef(null);
    useEffect(() => {
        var adjs = ["I'm a Software Engineer", "I'm a Builder", "I'm a Problem Solver", "I'm an Innovator", "I'm a Brother"];
        
        let delay = 1;
        function swap() {
            tagline.current.innerText = adjs[Math.floor(Math.random() *5)];
            delay *= 1.05;
            if (delay <= 1000) {
                setTimeout(() => {
                    swap();
                }, delay);
            } else {
                clearTimeout();
            }
        }
        
        
        function init() {
            setTimeout(() => {
                swap();
            }, delay);
        }
        window.onload = init();
        // 👇️ (better) use a ref
    }, []);


    return (
        <>
            <div className='title' id="about">
                {/* <div> */}
                    <h1 className='hero-name' >Douglas Hudson Walker</h1>
                    <h2 className='tagline'>Software Engineer</h2>
                {/* A series of flipping taglines which describe all the things I do. */}
                {/* </div>
                <div> */}
                    <p className='intro'><b>Douglas Hudson Walker</b> is an Australian Software Engineer and Researcher. He earned his Bachelor of Software Engineering from the University of South Australia and completed his honours cross-institutionally at the University of Melbourne.</p>
                    <p className='intro'>He is an application developer at DXC Technology, and is a research assistant at the Research Center for Interactive Virtual Environments. He has experience designing and building production ready applications and has helped to optimise humanitarian crisis response, decipher news veracity, and personalise online education.</p>
                </div>
                {/* <Link className='call-to-action-link' to="/about">See my Work!</Link> */}
                <div className="down-arrow"><p></p></div>
            {/* </div> */}
            <p className='quote' style={{marginTop: "16px"}}>"Civilization advances by extending the number of important operations which we can perform without thinking about them." - <span style={{ fontWeight: "bold", color: "var(--accent-color)" }}>Alfred North Whitehead.</span></p>
            {/* <AboutPage /> */}
            <ExperiencePage id="experience" />
            {/* <p className='quote' style={{marginTop: "0px"}}>“There can be no question of which was the greatest era for culture; the answer has to be today, until it is superseded by tomorrow.” - <span style={{ fontWeight: "bold" }}>Steven Pinker.</span></p> */}
            <p>More coming soon. Project Page under developement. Please get in touch via LinkedIn @<a style={{color: "pink"}} href="www.linkedin.com/in/douglashudsonwalker" target={"_blank"}>douglashudsonwalker</a></p>
            <p className='quote'>“Uncertainty is an uncomfortable position. But certainty is an absurd one." - <span style={{ fontWeight: "bold", color: "var(--accent-color)" }}>Voltaire.</span></p>
            {/* <ProjectList projects={projectContent} /> */}
            {/* <ContactPage /> */}
        </>
    );
}

export default HomePage;