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
                    <a href="#about" className="section-link">About Me</a>
                    <a href="#projects" className="section-link">Projects</a>
                    <a href="#contact" className="section-link">Contact Me</a>
                </div>
            </div>
        );
    }
}

export default TitleBar;