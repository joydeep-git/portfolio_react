import React from 'react';

import "../SCSS/Home.scss";

import { BsLinkedin, BsGithub, } from "react-icons/bs";

import { SiSass as ScssIcon  } from "react-icons/si";

import {
    FaReact as ReactIcon,
    FaHtml5 as HtmlIcon,
} from "react-icons/fa";

import { SiJavascript as JavascriptIcon } from "react-icons/si";

import {
    SiFirebase as FirebaseIcon,
    SiTailwindcss as TailwindIcon,
    SiRedux as ReduxIcon,
} from "react-icons/si";

function Home() {

    return (
        <div className="Home">

            <div className='homeTop'>
                <div className="intro">
                    <h5>Hello!  &nbsp; I'm <span>Joydeep Das</span></h5>
                    <p>Passionate React.js Developer | Constantly Exploring and Learning</p>
                </div>

                <div className='links'>

                    <a href="https://www.linkedin.com/in/joy-deepdas/" target='_blank' rel='noreferrer noopener'>
                        <BsLinkedin />
                    </a>

                    <a href="https://github.com/joydeep-git" target='_blank' rel='noreferrer noopener'>
                        <BsGithub />
                    </a>

                </div>
            </div>

            <div className='skills'>
                <div className='skillText'>
                    <p >Tech Stack</p>
                </div>

                <div className='skill'>
                    <div>
                        <ReactIcon />
                        <p>React.js</p>
                    </div>

                    <div>
                        <ReduxIcon />
                        <p>Redux</p>
                    </div>

                    <div>
                        <JavascriptIcon />
                        <p>JavaScript</p>
                    </div>

                    <div>
                        <FirebaseIcon />
                        <p>Firebase</p>
                    </div>

                    <div>
                        <TailwindIcon />
                        <p>Tailwind CSS</p>
                    </div>

                    <div>
                        <ScssIcon />
                        <p>SCSS</p>
                    </div>

                    <div>
                        <HtmlIcon />
                        <p>HTML</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;
