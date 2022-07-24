import React from 'react';
import ProjectList from '../components/ProjectList'
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ExperiencePage from './ExperiencePage';
import projectContent from './project-content'

const HomePage = () => {
    return (
        <>
            <div className='title' id='home'>
                <h1 className='hero-name' >Hi, my name is Douglas</h1>
                <h2 className='tagline'>I'm a Problem Solver.</h2> {/* A series of flipping taglines which describe all the things I do. */}
                <p className='intro'>I am always looking for opportunities to challenge myself and develop my skills. If you're working on difficult problems and could use a passionate, results-orientated software engineer on your team, please, <span className='highlight'>get in contact.</span></p>
                {/* <Link className='call-to-action-link' to="/about">See my Work!</Link> */}
                <div className="down-arrow"><p>Scroll for more.</p></div>
            </div>
            <p className='quote' >"Civilization advances by extending the number of important operations which we can perform without thinking about them." - <span style={{ fontWeight: "bold", color: "var(--accent-color)" }}>Alfred North Whitehead.</span></p>
            <AboutPage id="about" />
            <ExperiencePage id="experience" />
            {/* <p className='quote' style={{marginTop: "0px"}}>“There can be no question of which was the greatest era for culture; the answer has to be today, until it is superseded by tomorrow.” - <span style={{ fontWeight: "bold" }}>Steven Pinker.</span></p> */}
            <p className='quote' style={{marginTop: "0px"}}>“Homo sapiens, “knowing man,” is the species that uses information to resist the rot of entropy and the burdens of evolution." - <span style={{ fontWeight: "bold", color: "var(--accent-color)" }}>Steven Pinker.</span></p>
            <ProjectList projects={projectContent} />
            <ContactPage />
        </>
    );
}

export default HomePage;