import { JavaScriptOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";

const Skills = () => {
    return <div className="container"><div className="skills-section">
        <div className="section-title">Skills</div>
        <Row>
            <Col span={24}>
                <div className="skills">
                    <div className="skill-card">
                        <span>
                            <JavaScriptOutlined /></span>
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-card">
                        <span>  <JavaScriptOutlined /></span>
                        <p>JavaScript</p>
                    </div>
                </div>
            </Col>
        </Row>
    </div></div>;
};

export default Skills;
