import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "../CSS/Navbar.scss";
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
                        { openMenu ? <RxCross2 /> : <HiOutlineMenuAlt4 />}
                    </button>
                </div>

                <div className='pages' id={openMenu ? "open" : "close"}>
                    <Link to="/" className='link homeLi'>Home</Link>
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