import React from "react";
import { Link } from "react-router-dom";
import headshot from './images/Headshot.png'

const NavBar = () => (
    <nav>
        <ul className="headshot-container">
            <li ><Link className="headshot" to="/"><img src={headshot} alt="Headshot" />
                <p>Douglas Hudson Walker</p></Link></li>
        </ul>
        <ul>
            <li><Link to="/about"><span className="highlight">01</span> About</Link></li>
            <li><Link to="/experience"><span className="highlight">02</span> Experience</Link></li>
            <li><Link to="/projects"><span className="highlight">03</span> Projects</Link></li>
            <li><Link to="/contact"><span className="highlight">04</span> Contact</Link></li>
        </ul>
    </nav>
);

export default NavBar