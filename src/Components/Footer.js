import React from 'react';
import "../SCSS/Footer.scss";

import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

function Footer() {
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

                <a
                    href="https://www.linkedin.com/in/joy-deepdas/"
                    target='_blank'
                    rel="noopener noreferrer" >
                    <BsLinkedin />
                </a>

                <a
                    href="https://twitter.com/joy_deep_19"
                    target='_blank'
                    rel="noopener noreferrer" >
                    <BsTwitter />
                </a>

                <a
                    href="https://github.com/joydeep-git"
                    target='_blank'
                    rel="noopener noreferrer" >
                    <BsGithub />
                </a>

            </div>
        </div>
    )
}
export default Footer;