import React from 'react';
import ProjectList from '../Components/ProjectList';

import taskManager from "../Image/task-manager-react.png";

import {FaReact} from 'react-icons';


import "../CSS/Projects.css";

function Projects() {
    return (
        <div className="Projects">

            <div>
                <div><img src={taskManager} alt="Task Manager" /></div>
                <div>
                    <h4>Task Manager</h4>
                </div>

                <img src={FaReact} alt="" />

                

            </div>

        </div>
    )
};
export default Projects;