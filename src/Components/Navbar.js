import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "../SCSS/Navbar.scss";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

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
                    <Link to="/" className='logo'>{"[/  /]"}</Link >
                </div>

                <div className='menuBtn'>
                    <button onClick={() => { setOpenMenu(!openMenu) }}>
                        {openMenu ? <RxCross2 /> : <HiOutlineMenuAlt4 />}
                    </button>
                </div>

                <div className='pages' id={openMenu ? "open" : "close"}>
                    <Link to="/" className='link homeLi'>HOME</Link>
                    <Link to="https://resume.io/r/KfGTUy2KV" className='link'>RESUME</Link>
                    <Link to="/projects" className='link'>PROJECTS</Link >
                    <Link to="/Experience" className='link'>ABOUT ME</Link >

                    <button className='closeBtn link' onClick={() => { setOpenMenu(false) }}>
                        <RxCross2 />
                    </button>
                </div>

            </div>
        </div>
    )
}
export default Navbar;