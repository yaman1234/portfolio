import { FacebookOutlined, GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";

const Intro = () => {
    return <div><div className="intro">
        <div className="intro-text">
            <Row>
                <Col span={18}>
                    <span className="name"> Hi, I'm Yaman 👋</span>
                    <p>Results-driven Quality
                        Assurance Engineer with over
                        2 years of experience in
                        ensuring high-quality software
                        delivery. Proficient in
                        agile/scrum methodologies
                        and different testing
                        methodologies like manual,
                        automated and regression
                        testing, I excel in test planning,
                        execution, and defect tracking,
                        collaborating effectively with
                        cross-functional teams. Adept
                        at adapting to evolving
                        requirements, I am eager to
                        contribute my expertise and
                        grow as much as possible in
                        the field of IT.
                    </p>

                    <p><span></span>Thecho, Godawari</p>
                    <p><span></span>Available for new projects</p>




                    <div className="social-media-links">
                        <span><GithubOutlined /></span>
                        <span><LinkedinOutlined /></span>
                        <span><FacebookOutlined /></span>

                    </div>
                </Col>
                <Col span={6}>
                    <div className="intro-image">
                        <img src="" alt="" />
                    </div>
                </Col>
            </Row>
        </div>
    </div></div>;
};

export default Intro;
