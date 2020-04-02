import React from 'react';

class ProjectCard extends React.Component {
    render() {
        return(
            <div className='project-card'>
                <p className='project-title'>{this.props.title}</p>
                <p className='project-description'>{this.props.description}</p>
            </div>
        )
    }
}

export default ProjectCard