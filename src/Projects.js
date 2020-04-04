import React from "react"
import "./styling/Projects.css"
import ProjectData from "./ProjectData"
import ProjectCard from "./ProjectCard"

class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            projects: ProjectData
        }
    }

    render() {
        const projectsList = ProjectData.map(project => <ProjectCard title={project.title} description={project.description}/>);
        return (
            <div className="projects-wrapper" id="projects">
                <div className="project-list">
                    {projectsList}
                </div> 
            </div>
        )
    }
}

export default Projects