import { Col, Row } from "antd";
import React from "react";

const AboutMe = () => {
    return <div className="container"><div className="about-me section center">
        <div className="section-title">About Me</div>
        <Row>
            <Col span={6}>
                <div className="intro-image">
                    <img src="" alt="" />
                </div>
            </Col>
            <Col span={18}>
                <h3>Curious about me?  Here you have it:</h3>
                <p>Hi, I’m [Your Name], a dedicated Quality Control Engineer with a passion for ensuring precision, reliability, and excellence in every product. With [X] years of experience in quality assurance and process improvement, I specialize in maintaining high standards, optimizing workflows, and identifying areas for enhancement.

                    I thrive on problem-solving, data analysis, and implementing quality control measures to deliver superior results. My goal is to drive efficiency and uphold the highest industry standards in manufacturing and production.

                    Feel free to explore my work, expertise, and achievements. Let’s connect and collaborate!</p>
            </Col>
        </Row>
    </div></div>;
};

export default AboutMe;
