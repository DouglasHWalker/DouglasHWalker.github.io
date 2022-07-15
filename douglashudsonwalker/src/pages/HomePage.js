import React from 'react';
import { Link } from 'react-router-dom';
import ProjectList from '../components/ProjectList'
import AboutPage from './AboutPage';
import projectContent from './project-content'

const HomePage = () => (
    <>
        <div className='title'>
            <h1 className='hero-name'>Hi, I'm Douglas</h1>
            <h2 className='tagline'>I find solutions.</h2> {/* A series of flipping taglines which describe all the things I do. */}
            <p className='intro'>I'm an software engineer with a passion for problem solving and using innovative technology to extend user capabilties. </p>
            {/* <Link className='call-to-action-link' to="/about">See my Work!</Link> */}
            <div class="down-arrow"><p>Scroll for more.</p></div>
        </div>
        <AboutPage />
        <div className='featured'>
            <h2 className='highlight'>Featured Projects</h2>
            <ProjectList projects={projectContent} />
        </div>
    </>
);

export default HomePage;