import React from "react";
import "./Footer.css";
import { Row, Col } from "antd";
const Footer = () => {

    return (
        <>
            <div className="footer-container">
                <div>
                    <div className="LetsTalkContainer paddingSection containerGap">
                        <div className="container">
                            <div className="Common-header">
                                <div className="TaglineWithIcon">
                                    {/* <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="" /> */}
                                    <h2 className="text-center h2-gradient">Let's Talk</h2>
                                </div>
                                <h1 className="text-center white">
                                    Ready to work together?
                                </h1>
                                <p className="text-center para">Studiolist empowers investors and innovators with the resources they need to thrive. We provide strategic insights, powerful tools, and a supportive network to turn bold..</p>
                            </div>

                        </div>
                    </div>
                    <div className="container">
                        <div className="divider"></div>
                    </div>
                    {/* <div className="FooterContainer containerGap paddingSection">
                        <div className="container">
                            <Row gutter={[16, 16]}>
                                <Col lg={12} md={24} sm={24} xs={24}>
                                    <div>
                                        <div className="footer-logo">
                                            <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/1035mWPLp6zXWlooG2Lz/logo.svg" alt="logo" />
                                        </div>
                                        <p>StudioList connects investors and innovators, offering tools, insights, and support to accelerate growth.</p>
                                    </div>
                                </Col>
                                <Col lg={12} md={24} sm={24} xs={24}>
                                    <div>
                                        <h2>Quick Links</h2>
                                        <ul>
                                            
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default Footer;