import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "../SCSS/Navbar.scss";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { FaReact } from "react-icons/fa";

import resume from "../pdf/resume.pdf";

function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    const location = useLocation();

    const handleScrollEvent = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        setOpenMenu(false);

        window.addEventListener("scroll", handleScrollEvent);

        return () => {
            window.removeEventListener("scroll", handleScrollEvent);
        }

    }, [location]);

    return (
        <div className={`Navbar ${scrolled ? "Nav-scroll" : null}`}>

            <div className='navItems'>

                <div>
                    <Link to="/"
                        className='logo'>
                        <FaReact />
                    </Link >
                </div>

                <div className='menuBtn'>
                    <button onClick={() => { setOpenMenu(!openMenu) }}>
                        {openMenu ? <RxCross2 /> : <HiOutlineMenuAlt4 />}
                    </button>
                </div>

                <div
                    className={`pages ${scrolled ? "nav-pages" : null}`}
                    id={openMenu ? "open" : "close"}>

                    <Link to="/" className='link homeLi'>HOME</Link>

                    <Link onClick={() => window.open(resume)} className={`link ${scrolled ? "navItems-scrolled" : null}`}>RESUME</Link>

                    <Link to="/projects" className={`link ${scrolled ? "navItems-scrolled" : null}`}>PROJECTS</Link >

                    <Link to="/Experience" className={`link ${scrolled ? "navItems-scrolled" : null}`}>ABOUT ME</Link >

                    <button className='closeBtn link' onClick={() => { setOpenMenu(false) }}>
                        <RxCross2 />
                    </button>
                </div>

            </div>
        </div>
    )
}
export default Navbar;
