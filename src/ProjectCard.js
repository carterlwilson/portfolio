import React from 'react';
import './styling/ProjectCard.css'
import GithubLogo from './images/GitHub-Mark-64px.png'

class ProjectCard extends React.Component {
    render() {
        return(
            <div className='project-card'>
                <h2 className='project-title'>{this.props.title}</h2>
                <p className='project-description'>{this.props.description}</p>
                <a href={this.props.githubLink} className="github-link">
                    <img alt="Github link" src={GithubLogo}></img>
                </a>
            </div>
        )
    }
}

export default ProjectCard