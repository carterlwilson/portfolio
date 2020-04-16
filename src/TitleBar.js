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
                    <a className="icon-wrapper" href="https://github.com/carterlwilson">
                        <img src={GithubLogo} alt="github icon"/>
                    </a> 
                    <a className="icon-wrapper" href="https://www.linkedin.com/in/carter-l-wilson/">
                        <img src={LinkedinLogo} alt = "linkedin icon"/>
                    </a> 
                    <a className="icon-wrapper" href="https://drive.google.com/open?id=16i-w3vfA9N4UlJjpT0ScDauCXAItZHIz">
                        <img src={ResumeLogo} alt="resume"/>
                    </a> 
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