import React from "react";

import headshot from './images/Headshot.png';
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RLink}  from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <ul className="headshot-container">
                <li >Theme:</li>
            </ul>
            <ul>
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Contact</li>
                <li>Resume</li>
            </ul>
        </footer>
    );
}

export default Footer;