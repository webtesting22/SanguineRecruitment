import React, { useState, useEffect } from "react";
import "./HeroHome.css";
import { Row, Col, Tag } from "antd";
import { AnimatedBtn, ButtonGroup } from "../../CommonUsedComponents/AnimatedButton/AnimatedBtn";
import { RiUserSmileFill } from "react-icons/ri";
import { IoChatbubble } from "react-icons/io5";
const HeroHome = () => {

    return (
        <>
            <div id="hero-home" className="sidepadding">
                <div className="hero-home-container">
                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/1035mWPLp6zXWlooG2Lz/678647f276cc20015e38cae1_Background pattern.png" alt="" loading="lazy" className="BackgrounCheckPatterImage" />
                    <div className="hero-home-content">
                        <Row>
                            <Col lg={10} md={12} sm={24} xs={24}>
                                <div>
                                    <div>
                                        <Tag data-aos="fade-up"
                                            data-aos-duration="1500">100+ trusted partners</Tag>
                                        <h1 className="big-title" data-aos="fade-up"
                                            data-aos-duration="1500">Recruitment process with <span className="span-title">smart solutions</span>.</h1>
                                        <p data-aos="fade-up"
                                            data-aos-duration="1700">Linkrow is your trusted partner in recruitment, offering personalized HR solutions that connect top talent with the right opportunities.</p>

                                        <ButtonGroup>
                                            <AnimatedBtn
                                                text="Free consultation"
                                                hoverText="Free consultation"
                                                icon={<RiUserSmileFill />}
                                            />
                                            <AnimatedBtn
                                                text="Free consultation"
                                                hoverText="Free consultation"
                                                icon={<IoChatbubble />}
                                                variant="consultation"
                                                onClick={() => console.log('clicked')}
                                            />
                                        </ButtonGroup>

                                    </div>
                                </div>
                            </Col>
                            <Col lg={14} md={12} sm={24} xs={24} >
                                <div className="RightSideAnimatedContainer" data-aos="fade-Left"
                                    data-aos-duration="1500">
                                    <div>
                                        <div className="BackgroundContainerColor">
                                            <div className="AnimatedContentContainer">
                                                <div className="AnimatedContentContainerColor">
                                                    <h1 className="small-title">Connecting You with the Right Talent for <span className="small-span-title">Lasting Success</span></h1>
                                                </div>
                                                <div className="AnimatedParagraphContainer">
                                                    <p>At Sanguine Recruitment, we match your hiring needs with qualified candidates, ensuring placements that drive business growth.</p>
                                                </div>
                                            </div>
                                            <div className="AnimatedContainerColor">
                                                <img src="https://images.unsplash.com/photo-1530036846422-afb4b7af2fd4?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroHome;