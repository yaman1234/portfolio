import { Col, Row } from "antd";
import React from "react";
import logo from "../images/javra_logo.png"

const Experience = () => {
    return (
        <div>
            <div className="experience-section">
                <div className="section-title">Experience</div>
                <Row>
                    <Col span={16} offset={4}>
                        <p>Here is a quick summary of my most recent experiences:</p>

                        <div className="experience-card">
                            <Row>
                                <Col span={6}><div className="company-logo"><img src={logo} alt="Company Logo" /></div></Col>
                                <Col span={12}> <div className="experience-details">
                                    <div className="job-position">Quality Control Engineer</div>
                                    <div className="responsibilities">
                                        <ul>
                                            <li>Manual Testing</li>
                                            <li>Test case design and Execution</li>
                                            <li>Defect logging and Tracking</li>
                                            <li>Regression Testing</li>
                                            <li>Automated Testing</li>
                                            <li>Collaboration with development Teams</li>
                                            <li>Documentation</li>
                                        </ul>
                                    </div>
                                </div></Col>
                                <Col span={6}><div className="timeline"> 2022 March - Present</div></Col>

                            </Row>

                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Experience;
