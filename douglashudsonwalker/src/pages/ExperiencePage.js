import React, { useState } from 'react';
import experiences from './experiences-content';

const ExperiencePage = () => {
    const [currentTab, setCurrentTab] = useState('1');

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    };

    return (
        <>
            <div className='about-container'>
                <div className='about' id='experience'>
                    {/* <h1>Experience </h1> */}
                    {/* <p>I have had the privilege of working in several industries and with many teams. I've worked in a <span className='highlight' style={{ paddingRight: "0px" }}>student start-up</span> developing education platforms for postgraduate medical students, in a <span className='highlight' style={{ paddingRight: "0px" }}>large consulting firm</span> facilitating automation for fortune 500 clients, and in a large university institute performing <span className='highlight' style={{ paddingRight: "0px" }}>research and development</span> for government and defence.</p>
                    <p>I have also been very fortunate to have a determined <span className='highlight' style={{ paddingRight: "0px" }}>entrepreneurial role model</span> and I am very proud of my experiences growing up in a family business. I understand the tenacity required to <span className='highlight' style={{ paddingRight: "0px" }}>achieve results</span> and the satisfaction of <span className='highlight' style={{ paddingRight: "0px" }}>delivering value to customers.</span></p>
                    <div style={{maxWidth: '100%', textAlign: 'left'}}><button className='resume'>View Resume</button></div> */}
                    <div className='experienceTabs'>
                        <div className='tabs'>
                            {experiences.map((tab, i) =>
                                <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                            )}
                        </div>
                        <div className='content'>
                            {experiences.map((tab, i) =>
                                <div key={i}>
                                    {currentTab === `${tab.id}` &&
                                        <div>
                                            <div className='tab-title'><h4>{tab.title}</h4> <p style={{ margin: '0', padding: '0' }} className='tab-date, highlight'>{tab.company}</p></div>
                                            <p className='tab-company' style={{ margin: '0' }}>{tab.date}</p>
                                            <ul id='el' className='tab-content' style={{ margin: '0' }}>
                                                {tab.content.map((para, key) => (
                                                    <li>{para}</li>
                                                ))}
                                            </ul>
                                            <div style={{float: 'right', textAlign: 'right'}} className='tech'>
                                                {tab.tech.map((t, key) => (
                                                    <p>{t}</p>
                                                ))}
                                            </div>
                                        </div>
                                    }
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ExperiencePage;