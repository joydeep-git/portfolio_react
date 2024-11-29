import React from 'react';

import "../SCSS/Home.scss";


import { LinkedInIcon, TypeScriptIcon, NextJsIcon, GitHubIcon, TailwindIcon, ReduxIcon } from '../icons/IconPack';


function Home() {

  const skill = [
    {
      name: "Next js",
      icon: <NextJsIcon />
    },
    {
      name: "TypeScript",
      icon: <TypeScriptIcon />
    },
    {
      name: "Redux",
      icon: <ReduxIcon />
    },
    {
      name: "Tailwind CSS",
      icon: <TailwindIcon />
    },
    // {
    //   name: "Node",
    //   icon: <NodeJsIcon />
    // },
    // {
    //   name: "Express",
    //   icon: <ExpressIcon />
    // },
    // {
    //   name: "MongoDB",
    //   icon: <MongoDbIcon />
    // },
  ]

  return (
    <div className="Home">

      <div className='homeTop'>
        <div className="intro">
          <h5>Hello!  &nbsp; I'm <span>Joydeep Das</span></h5>
          <p>Passionate React.js Developer | Constantly Exploring and Learning</p>
        </div>

        <div className='links'>

          <a href="https://www.linkedin.com/in/joy-deepdas/" target='_blank' rel='noreferrer noopener'>
            <LinkedInIcon />
          </a>

          <a href="https://github.com/joydeep-git" target='_blank' rel='noreferrer noopener'>
            <GitHubIcon />
          </a>

        </div>
      </div>

      <div className='skills'>
        <div className='skillText'>
          <p >Tech Stack</p>
        </div>

        <div className='skill'>

          {
            skill.map((val, index) => {
              return (
                <div key={val.name + index}>
                  {val.icon}
                  <p>{val.name}</p>
                </div>
              )
            })
          }

        </div>
      </div>

    </div>
  )
}

export default Home;
