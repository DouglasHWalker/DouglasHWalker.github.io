import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <>
        <div className='title'>
            <h1 className='hero-name'>HI, MY NAME IS DOUGLAS</h1>
            <h2 className='tagline'>I build software.</h2> {/* A series of flipping taglines which describe all the things I do. */}
            <p className='intro'>
                I'm a full-stack engineer with a passion for innovative technology. I enjoy building practical solutions to complex problems.
            </p>
            {/* <Link className='call-to-action-link' to="/about">See my Work!</Link> */}
        </div>
    </>
);

export default HomePage;