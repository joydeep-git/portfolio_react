import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "../SCSS/Navbar.scss";


import { CrossIcon, MenuIcon, ReactJsIcon } from '../icons/IconPack';



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
                        <ReactJsIcon height='46px' width='46px' />
                    </Link >
                </div>

                <div className='menuBtn'>
                    <button onClick={() => { setOpenMenu(!openMenu) }}>
                        {openMenu ? <CrossIcon /> : <MenuIcon />}
                    </button>
                </div>

                <div
                    className={`pages ${scrolled ? "nav-pages" : null}`}
                    id={openMenu ? "open" : "close"}>

                    <Link to="/" className='link homeLi'>HOME</Link>

                    <Link onClick={() => window.open(resume)} className="link">RESUME</Link>

                    <Link to="/projects" className="link">PROJECTS</Link >

                    <Link to="/Experience" className="link">ABOUT ME</Link >

                    <button className='closeBtn link' onClick={() => { setOpenMenu(false) }}>
                        <CrossIcon />
                    </button>
                </div>

            </div>
        </div>
    )
}
export default Navbar;
