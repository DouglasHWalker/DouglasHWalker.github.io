import React from 'react';
import { Link } from 'react-router-dom';
import ProjectList from '../components/ProjectList'
import projectContent from './project-content'

const HomePage = () => (
    <>
        <div className='title'>
            <h1 className='hero-name'>Hi, my name is Douglas</h1>
            <h2 className='tagline'>I solve problems using code.</h2> {/* A series of flipping taglines which describe all the things I do. */}
            <p className='intro'>I'm a software engineer with a passion for innovative technology. I enjoy building practical solutions to complex problems.</p>
            {/* <Link className='call-to-action-link' to="/about">See my Work!</Link> */}
            <div class="down-arrow"></div>
        </div>
        <div className='featured'>
            <h2 className='highlight'>Featured Projects</h2>
            <ProjectList projects={projectContent} />
        </div>
    </>
);

export default HomePage;