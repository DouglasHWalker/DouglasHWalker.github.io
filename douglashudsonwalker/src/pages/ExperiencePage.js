import React, { useState } from 'react';
import headshot from '../images/Headshot.png'

const ExperiencePage = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'University of South Australia',
            title: 'Developer, Research Assistant',
            company: 'University of South Australia | Australian Institute of Interactive Virtual Environments | Defense Science and Technology Group | ',
            date: '2021 - present',
            content: [
                'Built agent capable of optimising strategies to maximise lives saved in simulation. Novel visualisation utilised D3 and TypeScript to generate actor-entity timelines. User-studies  found the visualisation improved sense making for difficult questions by over 60%.',
                'Developed innovative visualisation for humanitarian crisis response in collaboration with  Defence Science and Technology Group. https://www.dst.defence.gov.au.',
                'Performed extensive literature reviews of state-of-the-art artificial intelligence techniques and implemented demonstrations for use in augmented reality headsets.',
                'Performed large user-studies and collated results for use in research publications.'
            ],
            tech: [
                'JavaScript',
                'Python',
                'D3',
                'TypeScript',
                'Unity',
                'HTML',
                'CSS',
                'Design Patterns',
                'Data Structures',
                'Data Normalisation',
                'LaTeX',
            ]
        },
        {
            id: 2,
            tabTitle: 'DXC Technology',
            title: 'Senior Assistant Application Developer',
            company: 'DXC Technology',
            date: 'June 2022 - Nov 2022',
            content: [
                'One of 15 UniSA STEM students selected for 3 month, full-time internship with cloud development team located in Adelaide, SA.',
            ],
            tech: [
                'C++',
                'Java',
                'Python',
                'React Native',
                'Angular',
                'HTML',
                'CSS',
                'JavaScript',
                'Node.js',
                'Express.js',
                'Kotlin',
                'Swift',
                'ASP.NET MVC',
                'AWS',
                'Azure',
                'TypeScript',
                'CI/CD',
                'C#',
                'MVVC',
                'Design Patterns',
                'SCRUM',
                'Algorithms',
                'Optimisation',
                'Data Structures',
                'NoSQL',
                'Data Normalisation',
                'SQL',
                'MongoDB',
                'UML, ERD',
                'PDDL',
            ]
        },
        {
            id: 3,
            tabTitle: 'Adelaide Advanced Applications (3A)',
            title: 'Scrum Master, Senior Developer',
            company: 'Adelaide Advanced Applications (3A)',
            date: '2018 - 2019',
            content: [
                'Developed custom education management system for post-graduates specialising in oculoplastic surgery. Warning Graphic: oculoplastic.eyesurgeryvideos.net',
                'Full-stack development of cross-platform CMS. Primary roles in product design, prototyping, architecture, Azure cloud solutions, and bespoke specialty media player',
                'Provided leadership for development team, delegating tasks based on strengths, team planning and fostering client relationship.',
            ],
            tech: [
                'C#',
                'ASP.NET MVC',
                'Microsoft Azure',
                'Java',
                'Swift',
                'CI/CD',
                'MVVC',
                'SCRUM and Agile',
                'SQL',
                'MySQL',
                'UML',
                'InVision Studio',
            ]
        },
        {
            id: 4,
            tabTitle: 'Hanni Australia',
            title: 'Retail Manager, Customer Sales, Construction',
            company: 'Hanni Australia',
            date: '2012 - 2018',
            content: [
                'Fast-paced sales environment, working double shifts on feet, managing team of five, multi-tasking stock, sales, site construction and maintenance.',
            ],
            tech: []
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    };

    return (
        <>
            <div className='about-container'>
                <div className='about' style={{ maxWidth: "40vw" }}>
                    <h1>Experiences </h1>
                    <p>I have had the privilege of working in several industries and company structures. I've worked in a <span className='highlight' style={{ paddingRight: "0px" }}>student start-up</span> developing applications for advanced medical education, in a <span className='highlight' style={{ paddingRight: "0px" }}>large consulting firm</span> on cloud delivery for several fortune 500 clients, and in a large university performing <span className='highlight' style={{ paddingRight: "0px" }}>research and development</span> for government and defence.</p>
                    <p>I have been fortunate to have a determined <span className='highlight' style={{ paddingRight: "0px" }}>entrepreneurial role model</span> from a young age and am very proud of my experiences growing up in a family business. I understand the tenacity required to <span className='highlight' style={{ paddingRight: "0px" }}>achieve results</span> and the satisfaction of <span className='highlight' style={{ paddingRight: "0px" }}>delivering value to people.</span></p>
                    {/* <div style={{maxWidth: '100%', textAlign: 'left'}}><button className='resume'>View Resume</button></div> */}
                    <div className='experienceTabs'>
                        <div className='tabs'>
                            {tabs.map((tab, i) =>
                                <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                            )}
                        </div>
                        <div className='content'>
                            {tabs.map((tab, i) =>
                                <div key={i}>
                                    {currentTab === `${tab.id}` &&
                                        <div>
                                            <div className='tab-title'><h4>{tab.title}</h4> <p style={{ margin: '0', padding: '0' }} className='tab-date, highlight'>{tab.tabTitle}</p></div>
                                            <p className='tab-company' style={{ margin: '0' }}>{tab.date}</p>
                                            <ul id='el' className='tab-content' style={{ margin: '0' }}>
                                                {tab.content.map((para, key) => (
                                                    <li>{para}</li>
                                                ))}
                                            </ul>
                                            {/* <div className='tech'>
                                    {tab.tech.map((t, key) => (
                                        <p>{t}</p>
                                        ))}
                                    </div> */}
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