import React from 'react';

import "../SCSS/ProjectItems.scss";

import { BsGithub, BsBrowserEdge } from "react-icons/bs";

function ProjectItems({ name, image, github, liveUrl, techUsed }) {
    return (
        <div className='ProjectItems'>

            <div className='img'>
                <img src={image} alt={name} />
            </div>

            <div className='projectData'>

                <div className="projectTitle">
                    <h3>{name}</h3>
                </div>

                <div className="projectSkills">
                    <p>Skills</p>
                    <div>
                        {techUsed.map((icon, index) => (
                            <span key={index} className="iconWrapper">
                                {icon}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="projectLinks">

                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <BsGithub />
                    </a>

                    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                        <BsBrowserEdge />
                    </a>

                </div>
            </div>

        </div>
    )
}
export default ProjectItems;