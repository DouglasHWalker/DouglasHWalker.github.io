import React from 'react';
import portfolioContent from '../data/portfolio-content'
import PortfolioList from '../components/PortfolioList'

const PortfolioListPage = () => {

    setTimeout(removeNav, 100);
    function removeNav() {
        document.getElementsByTagName("nav")[0].remove();
    }
    return (
        <>
            <div className="portfolio-title">
                <h2>DXC Internship Portfolio</h2>
            </div>

            <div className="portfolio-nav">
                <ul>
                    {portfolioContent.map((section, key) => (
                        <li key={key}>{section.section}</li>
                    ))}
                </ul>
            </div>

            <PortfolioList section={portfolioContent[0]} />
        </>
    );
}

export default PortfolioListPage;