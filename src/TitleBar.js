import React from 'react';
import './styling/TitleBar.css';
import GithubLogo from './images/GitHub-Mark-Light-64px.png'
import LinkedinLogo from './images/linkedin-64.png'



class TitleBar extends React.Component {
    render() {
        return (
            <div className="titlebar">
                <div className="logo">
                    <p>CW</p>
                </div>
                <div className="icons">
                    <img src={GithubLogo} alt="github icon"/>
                    <img src={LinkedinLogo} alt = "linkedin icon"/>
                </div>
            </div>
        );
    }
}

export default TitleBar;