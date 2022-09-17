import React from "react";
import { Link } from 'react-router-dom';

const PortfolioList = ({ section }) => {
    console.log(section);
    return (
        <>
            <div className="portfolio-content">
                <p id="sectionIntro">{section.intro}</p>
                <ul className='portfolio-list'>
                    {section.content.map((workitem, key) => (
                        <li key={key} className='portfolio-list-item'>
                            <div className="list_item_content" id={workitem.name + "_content"}>
                                <h3>{workitem.title}</h3>
                                <p>{workitem.summary}</p>
                                <div className="tech">
                                    {workitem.technologies.map((tech, key) => (
                                        <p>{tech}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="portfolio-list-item-img">
                                <Link to={`/portfolio/${workitem.name}`} id={workitem.name + "_img"}>
                                     <img src={workitem.image}  /> {/* onLoad={setImageHeight(workitem.name)} */}
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default PortfolioList;