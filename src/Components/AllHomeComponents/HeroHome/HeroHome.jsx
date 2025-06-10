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
                                        <Tag data-aos="fade-up" data-aos-duration="1500">
                                            Empowering Smarter Recruitment
                                        </Tag>
                                        <h1 className="big-title" data-aos="fade-up" data-aos-duration="1500">
                                            Streamlined Hiring with <span className="span-title">Smart Solutions</span>
                                        </h1>
                                        <p data-aos="fade-up" data-aos-duration="1700">
                                            At Linkrow, we deliver tailored recruitment strategies that align top talent with ideal career opportunities, making us your reliable HR partner.
                                        </p>

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
                                                <img src="https://images.unsplash.com/photo-1522241112606-b5d35a468795?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
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