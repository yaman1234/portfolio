import React from "react";
import cv from "../assets/ProfessionalResume.pdf";

const Header = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="logo center">
                    &lt;YM/&gt;
                </div>
                <ul>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Experience</li>
                    <li>Academics</li>
                    <li>Contact</li>
                </ul>
                <div className="right center">
                    <button>Dark Mode</button>
                    <button>
                        <a href={cv} download="Resume.pdf">
                            Download CV
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
