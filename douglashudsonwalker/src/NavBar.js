import React from "react";

import headshot from './images/Headshot.png';
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RLink}  from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            {/* <ul className="headshot-container">
                <li ><RLink className="headshot" to="/"><img src={headshot} alt="Headshot" />
                    <p>Douglas Hudson Walker</p></RLink></li>
            </ul> */}
            <ul>
                <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-150} duration={1200}>
                    <span className="highlight">01</span> About
                </Link></li>
                <li><Link activeClass="active" to="experience" spy={true} smooth={true} offset={-150} duration={1200}>
                    <span className="highlight">02</span> Experience</Link></li>
                <li><Link activeClass="active" to="projects" spy={true} smooth={true} offset={-150} duration={1200}>
                    <span className="highlight">03</span> Projects</Link></li>
                <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-150} duration={1200}>
                    <span className="highlight">04</span> Contact</Link></li>
                {/* <li><Link activeClass="active" to="resume" spy={true} smooth={true} offset={-70} duration={1200}>
                    <span className="highlight">05</span> Resume</Link></li> */}
            </ul>
        </nav>
    );
}

export default NavBar;