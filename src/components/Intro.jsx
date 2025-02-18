import {
    FacebookOutlined,
    GithubOutlined,
    LinkedinOutlined,
} from "@ant-design/icons";
import { CiLocationOn } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

import { Col, Row } from "antd";
import React from "react";

const Intro = () => {
    return (
        <div className="container">
            <div className="intro section center">

                <Row>
                    <Col span={18}>
                        <div className="intro-text">
                            <span className="name"> Hi, I'm Yaman 👋</span>
                            <p>
                                Results-driven Quality Assurance Engineer with over 2 years of
                                experience in ensuring high-quality software delivery.
                                Proficient in agile/scrum methodologies and different testing
                                methodologies like manual, automated and regression testing, I
                                excel in test planning, execution, and defect tracking,
                                collaborating effectively with cross-functional teams. Adept at
                                adapting to evolving requirements, I am eager to contribute my
                                expertise and grow as much as possible in the field of IT.
                            </p>

                            <p>
                                <span><CiLocationOn /></span>Thecho-Godawari 12, Lalitpur
                            </p>
                            <p>
                                <span className="available"><GoDotFill /></span>Available for new projects
                            </p>

                            <div className="social-media-links">
                                <span className="media-link">
                                    <a href="https://github.com/yaman1234/"><GithubOutlined /></a>
                                </span>
                                <span className="media-link">

                                    <a href="https://www.linkedin.com/in/yaman-maharjan/"><LinkedinOutlined /></a>
                                    <link rel="stylesheet" href="" />
                                </span>
                                <span className="media-link">
                                    <a href="https://www.facebook.com/yaman.maharjan.39/"><FacebookOutlined /></a>
                                </span>
                            </div>
                        </div>

                    </Col>
                    <Col span={6}>
                        <div className="intro-image">
                            <img src="" alt="" />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>

    );
};

export default Intro;
