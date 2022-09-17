import React from "react";

import headshot from './images/Headshot.png';
import { useRef, useEffect } from 'react';

const Footer = () => {
    const tagline = useRef(null);
    // [primary],[secondary],[accent],[back]
    var colors = [
        ["#C4315B",  "#e9e4ee", "#F0C7B7","#232C2F",],
        ["#546A7B", "#9EA3B0", "#FAE1DF", "#0F1D2E"],
        ["#AAFCB8", "#D7FFF1", "FFF", "#2E3336"],
        ["#51A0F4", "#FFF", "#99C4F2", "#485D73"],
        ["#937D8F", "#A88FAC", "#D4B2D8", "#5D4E60"],
        ["#A1FCC6", "#E8EFFE", "F1F1F1", "#2E3336"],
        ["#ADD6FC", "#F8EAFE", "FFF", "#2E3336"],
        ["#a8ff90", "#e1ffdb", "FFF", "#2E3336"],
    ];

    useEffect(() => {}, []);
    
    const setColorTo = (color) => {
        // document.documentElement.style.setProperty('--primary-color', primaries[Math.floor(Math.random() * 7)]);
        document.documentElement.style.setProperty('--primary-color', colors[color][0]);
        document.documentElement.style.setProperty('--foreground-color', colors[color][1]);
        document.documentElement.style.setProperty('--accent-color', colors[color][2]);
        document.documentElement.style.setProperty('--background-color', colors[color][3]);
    }

    return (
        <footer>
            <ul>
                <li style={{background: colors[0][0]}} onClick={() => setColorTo(0)}></li>
                <li style={{background: colors[1][0]}} onClick={() => setColorTo(1)}></li>
                <li style={{background: colors[2][0]}} onClick={() => setColorTo(2)}></li>
                <li style={{background: colors[3][0]}} onClick={() => setColorTo(3)}></li>
                <li style={{background: colors[4][0]}} onClick={() => setColorTo(4)}></li>
                <li style={{background: colors[5][0]}} onClick={() => setColorTo(5)} data></li>
                <li style={{background: colors[6][0]}} onClick={() => setColorTo(6)}></li>
           </ul>
        </footer>
    );
}

export default Footer;