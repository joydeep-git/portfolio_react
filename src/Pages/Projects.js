import React from 'react';
import { projectDetails } from "../Data/ProjectDetails";
import ProjectItems from '../Components/ProjectItems';
import "../SCSS/Projects.scss";
import Navbar from '../Components/Navbar';

function Projects() {
    return (
        <>
            <Navbar />
            <div className="Projects">
                <h1>Code. Eat. Sleep. Repeat</h1>

                <div className='mainItem'>
                    {projectDetails.map((project) => {
                        return (
                            <ProjectItems key={project.id} name={project.name} image={project.image} github={project.github} liveUrl={project.liveUrl} techUsed={project.techUsed} />
                        )
                    })}
                </div>

            </div>
        </>
    )
};
export default Projects;