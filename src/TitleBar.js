import React from 'react';
import './styling/TitleBar.css';
import GithubLogo from './images/GitHub-Mark-Light-64px.png'
import LinkedinLogo from './images/linkedin-64.png'
import ResumeLogo from './images/portfolio.png'

class TitleBar extends React.Component {
    render() {
        return (
            <div className="titlebar">
                <div className="icons">
                    <img src={GithubLogo} alt="github icon"/>
                    <img src={LinkedinLogo} alt = "linkedin icon"/>
                    <img src={ResumeLogo} alt="resume"/>
                </div>              
                <div className="links">
                    <div className="section-link">
                        <a href="#about">About Me</a>
                    </div>
                    <div className='section-link'>
                        <a href="#projects">Projects</a>
                    </div>
                    <div className='section-link'>
                        <a href="#contact">Contact Me</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default TitleBar;