import React from 'react';
import ProjectList from '../components/ProjectList'
import AboutPage from './AboutPage';
import ExperiencePage from './ExperiencePage';
import projectContent from './project-content'

const HomePage = () => {
    return (
        <>
            <div className='title' id='home'>
                <h1 className='hero-name'>Hi, I'm Douglas, a software engineer.</h1>
                <h2 className='tagline'>I am dedicated to building useful tools.</h2> {/* A series of flipping taglines which describe all the things I do. */}
                <p className='intro'>I'm looking for opportunities to apply my skills to difficult problems and make a real impact. Reach out if your looking for a highly skilled, results orientated, life-long learner.</p>
                {/* <Link className='call-to-action-link' to="/about">See my Work!</Link> */}
                <div className="down-arrow"><p>Scroll for more.</p></div>
            </div>
            <p className='quote' >"Civilization advances by extending the number of important operations which we can perform without thinking about them." - <span style={{ fontWeight: "bold" }}>Alfred North Whitehead.</span></p>
            <AboutPage id="about" />
            <ExperiencePage id="experience" />
            {/* <p className='quote' style={{marginTop: "0px"}}>“There can be no question of which was the greatest era for culture; the answer has to be today, until it is superseded by tomorrow.” - <span style={{ fontWeight: "bold" }}>Steven Pinker.</span></p> */}
            {/* <p className='quote' style={{marginTop: "0px"}}>“Fiction is empathy technology." - <span style={{ fontWeight: "bold" }}>Steven Pinker.</span></p> */}
            {/* <p className='quote' style={{marginTop: "0px"}}>“Homo sapiens, “knowing man,” is the species that uses information to resist the rot of entropy and the burdens of evolution." - <span style={{ fontWeight: "bold" }}>Steven Pinker.</span></p> */}
            <div className='featured' id='projects'>
                <h2 className='highlight'>Projects</h2>
                <ProjectList projects={projectContent} />
            </div>
        </>
    );
}

export default HomePage;