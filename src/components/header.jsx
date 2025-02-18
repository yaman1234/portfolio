import { VerticalLeftOutlined } from "@ant-design/icons";
import React from "react";
import cv from "../assets/ProfessionalResume.pdf";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <span>
            <VerticalLeftOutlined />
          </span>
        </div>
        <ul>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
        <div className="right">
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
