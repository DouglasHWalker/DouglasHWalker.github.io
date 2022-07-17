import React from 'react';
import ProjectList from '../components/ProjectList'
import AboutPage from './AboutPage';
import ExperiencePage from './ExperiencePage';
import projectContent from './project-content'

const HomePage = () => {
    return (
        <>
            <div className='title' id='home'>
                <h1 className='hero-name'>Hi, I'm Douglas</h1>
                <h2 className='tagline'>I find solutions.</h2> {/* A series of flipping taglines which describe all the things I do. */}
                <p className='intro'>I'm a software engineer and problem solver with a passion for innovative technology. </p>
                {/* <Link className='call-to-action-link' to="/about">See my Work!</Link> */}
                <div className="down-arrow"><p>Scroll for more.</p></div>
            </div>
            <p className='quote'>"Civilization advances by extending the number of important operations which we can perform without thinking about them." - <span style={{ fontWeight: "bold" }}>Alfred North Whitehead.</span></p>
            <AboutPage id="about" />
            <p className='quote'>"Civilization advances by extending the number of important operations which we can perform without thinking about them." - <span style={{ fontWeight: "bold" }}>Alfred North Whitehead.</span></p>
            <ExperiencePage id="experience" />
            <div className='featured' id='projects'>
                <h2 className='highlight'>Featured Projects</h2>
                <ProjectList projects={projectContent} />
            </div>
        </>
    );
}

export default HomePage;