import React from 'react';
import "../SCSS/Footer.scss";

// Icons
import { LinkedInIcon, GitHubIcon, TwitterIcon } from '../icons/IconPack';

function Footer() {

  const footerLinks = [
    {
      href: "https://www.linkedin.com/in/joy-deepdas/",
      icon: <LinkedInIcon />
    },
    {
      href: "https://twitter.com/joy_deep_19",
      icon: <TwitterIcon />
    },
    {
      href: "https://github.com/joydeep-git",
      icon: <GitHubIcon />
    },
  ]

  return (
    <div className="Footer">
      <div className='contact'>

        <h2>Contact info:</h2>
        <h4>Joydeep Das</h4>
        <p><span>Ph No :</span> <span>+91 6290589624</span></p>
        <p><span>E-mail:</span><span>joydeep19@protonmail.com</span></p>
        <p><span>Address:</span><span>Hooghly, West Bengal, India</span></p>

      </div>

      <div className='socialLinks'>

        {
          footerLinks.map((val, index) => {
            return (
              <a
                key={val.href + index}
                href={val.href}
                target='_blank'
                rel="noopener noreferrer" >
                {val.icon}
              </a>
            )
          })
        }

      </div>
    </div>
  )
}
export default Footer;