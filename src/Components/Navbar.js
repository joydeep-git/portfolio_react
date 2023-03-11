import React from 'react';
import { Link } from 'react-router-dom';

import "../CSS/Navbar.css";

function Navbar() {
    return (
        <div className='Navbar'>

            <div > <div className="menu-btn"> </div> </div>

            <div>

                <div>
                    <Link to="/">{"<JD />"}</Link >
                </div>

                <div>
                    <a href="https://resume.io/r/KfGTUy2KV">Resume</a>
                </div>

                <div>
                    <Link to="/projects">Projects</Link >
                    <Link to="/roadmap">Roadmap</Link >
                </div>
            </div>
        </div>
    )
}
export default Navbar;