import React from "react";

import headshot from './images/Headshot.png';
import { Link as RLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { useRef, useEffect } from 'react';

const NavBar = () => {
    var colors = [
        ["#C4315B", "#e9e4ee", "#F0C7B7", "#232C2F","#293235"],
        ["#546A7B", "#9EA3B0", "#FAE1DF", "#0F1D2E", "#152233"],
        // ["#AAFCB8", "#D7FFF1", "FFF", "#2E3336"],
        // ["#51A0F4", "#FFF", "#99C4F2", "#485D73"],
        // ["#937D8F", "#A88FAC", "#D4B2D8", "#5D4E60"],
        ["#A1FCC6", "#E8EFFE", "FFF", "#2E3336","#32393B"],
        ["#aaa", "#2B2B2B", "F1F1F1", "#FFF", "#F9F9F9"],
        // ["#ADD6FC", "#F8EAFE", "FFF", "#2E3336"],
        // ["#a8ff90", "#e1ffdb", "FFF", "#2E3336"],
    ];

    useEffect(() => { }, []);

    const setColorTo = (color) => {
        // document.documentElement.style.setProperty('--primary-color', primaries[Math.floor(Math.random() * 7)]);
        document.documentElement.style.setProperty('--primary-color', colors[color][0]);
        document.documentElement.style.setProperty('--foreground-color', colors[color][1]);
        document.documentElement.style.setProperty('--accent-color', colors[color][2]);
        document.documentElement.style.setProperty('--background-color', colors[color][3]);
        document.documentElement.style.setProperty('--secondary-background-color', colors[color][4]);
    }
    return (
        <nav>
            {/* <ul className="headshot-container">
                <li ><RLink className="headshot" to="/"><img src={headshot} alt="Headshot" />
                    <p>Douglas Hudson Walker</p></RLink></li>
            </ul> */}
            <ul>
                {/* <li><Link className="active" to="contributions" spy={true} smooth={true} offset={-32} duration={1200}>
                    <span className="highlight">01</span>
                    Home
            </Link></li> */}
                <li><RLink className="active" to="/">Home</RLink></li>

                <li><Link className="active" to="experience" spy={true} smooth={true} offset={-32} duration={1200}>
                    {/* <span className="highlight">02</span> */}
                    Experience</Link></li>
                
                <li><Link className="active" to="flashcards" spy={true} smooth={true} offset={-32} duration={1200}>
                    {/* <span className="highlight">03</span> */}
                    Flashcards</Link></li>
                {/* <li><RLink className="active" to="/portfolio"><span className="highlight">03</span>Portfolio</RLink></li> */}

                <li><Link className="active" to="contact" spy={true} smooth={true} offset={-32} duration={1200}>
                    {/* <span className="highlight">04</span> */}
                    Contact</Link></li>
                
                {/* <li><Link className="active" to="resume" spy={true} smooth={true} offset={-70} duration={1200}>
                    <span className="highlight">05</span> Resume</Link></li> */}
                {/* <li><RLink className="active" to="/portfolio"><span className="highlight">05</span> portfolio</RLink></li> */}
            </ul>
            <footer>
                <ul>
                    <li style={{ background: colors[0][0] }} onClick={() => setColorTo(0)}></li>
                    <li style={{ background: colors[1][0] }} onClick={() => setColorTo(1)}></li>
                    <li style={{ background: colors[2][0] }} onClick={() => setColorTo(2)}></li>
                    <li style={{ background: colors[3][0] }} onClick={() => setColorTo(3)}></li>
                    {/* <li style={{ background: colors[4][0] }} onClick={() => setColorTo(4)}></li> */}
                    {/* <li style={{ background: colors[5][0] }} onClick={() => setColorTo(5)}></li> */}
                    {/* <li style={{background: colors[6][0]}} onClick={() => setColorTo(6)}></li> */}
                </ul>
            </footer>
        </nav>
    );
}

export default NavBar;