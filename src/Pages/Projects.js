import React from 'react';
import {projectDetails} from "../Data/ProjectDetails";
import ProjectItems from '../Components/ProjectItems';
import "../CSS/Projects.css";

function Projects() {
    return (
        <div className="Projects">
            <h1>My Projects</h1>
            
            <div className='mainItem'>
                {projectDetails.map((project)=>{
                    return(
                        <ProjectItems name={project.name} image={project.image}/>
                    )
                })}
            </div>

        </div>
    )
};
export default Projects;