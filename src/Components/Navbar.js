import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "../CSS/Navbar.css";

function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);

    const location = useLocation();
    useEffect(() => {
        setOpenMenu(false)
    }, [location]);

    return (
        <div className='Navbar'>

            <div className='navItems'>

                <div>
                    <Link to="/" className='logo'>{"< JD />"}</Link >
                </div>

                <div className='menuBtn'>
                    <button onClick={() => { setOpenMenu(!openMenu) }}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>

                <div className='pages' id={openMenu ? "open" : "close"}>
                    <Link to="https://resume.io/r/KfGTUy2KV" className='link'>Resume</Link>
                    <Link to="/projects" className='link'>Projects</Link >
                    <Link to="/Experience" className='link'>About me</Link >

                    <button className='closeBtn link' onClick={() => {setOpenMenu(false)}}>
                        close
                    </button>
                </div>

            </div>
        </div>
    )
}
export default Navbar;