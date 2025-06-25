import React from "react";
import "./Footer.css";
import { Row, Col } from "antd";
import NavigationLinks from "../MegaNavigation/NavigationLinks";
const Footer = () => {
    const BrandLinks = [
        {
            title: "Legal Informations",
            path: ""
        },
        {
            title: "Terms of Conditions",
            path: ""
        },
        {
            title: "Privacy Policy",
            path: ""
        },

    ]

    const SocialMediaLinks = [
        {
            title: "Instagram",
            path: "https://www.instagram.com/sanguinerecruitment/"
        },
        {
            title: "Youtube",
            path: "https://www.youtube.com/@sanguinerecruitment"
        },
        {
            title: "LinkedIn",
            path: "https://www.linkedin.com/company/sanguinerecruitment/"
        }
    ]

    return (
        <>
            <div className="footer-container">
                <div>
                    <div className="LetsTalkContainer paddingSection containerGap">
                        <div className="container">
                            <div className="Common-header">
                                <div className="TaglineWithIcon" data-aos="blur-to-clear" data-aos-delay="100">
                                    <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="" />
                                    <h2 className="text-center h2-gradient">Let's Talk</h2>
                                </div>
                                <h1 className="text-center white" data-aos="blur-to-clear" data-aos-delay="100">
                                    Ready to Hire the Right Talent?
                                </h1>
                                <p className="text-center para" data-aos="blur-to-clear" data-aos-delay="100">
                                    Whether you're scaling fast or building a solid foundation, we’re here to support your hiring journey.
                                    Let’s connect and craft a recruitment strategy tailored to your business.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="divider"></div>
                    </div>
                    <div className="FooterContainer containerGap paddingSection">
                        <div className="container">
                            <Row gutter={[16, 16]}>
                                <Col lg={16} md={24} sm={24} xs={24}>
                                    <div className="FooterLeftContainer">
                                        <div className="footer-logo">
                                            <h2 className="white">Sanguine Recruiters</h2>
                                        </div>
                                        <br />
                                        <p>
                                            Sanguine Recruiters connects businesses with top-tier talent by delivering strategic hiring solutions, industry expertise, and a partnership-driven approach to recruitment success.
                                        </p>
                                        <br /><br />
                                        <div className="FooterRightContainerLinks" >
                                            {/* <h2>Quick Links</h2> */}
                                            {/* <br /> */}
                                            <ul style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                                                {BrandLinks.map((link, index) => (
                                                    <li key={index}>
                                                        <a href={link.title}>{link.title}</a>
                                                        {/* <hr style={{maxWidth:"30px",textAlign:"start"}}/> */}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                </Col>
                                <Col lg={8} md={24} sm={24} xs={24}>
                                    <div className="FooterRightContainer">
                                        <div className="FooterRightContainerLinks">
                                            <h2>Quick Links</h2>
                                            <br />
                                            <ul>
                                                {NavigationLinks.map((link, index) => (
                                                    <li key={index}>
                                                        <a href={link.path}>{link.link}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="FooterRightContainerLinks">
                                            <h2>Social Media</h2>
                                            <br />
                                            <ul>
                                                {SocialMediaLinks.map((item, index) => (
                                                    <li key={index}>
                                                        <a href={item.path} target="_blank" rel="noopener noreferrer">{item.title}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                    </div>

                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="container">
                        <div className="divider"></div>
                    </div>
                    <div className="CopyrightContainer container">
                        <p>Designed and Developed by <a href="https://outlead.in" target="_blank" rel="noopener noreferrer">Outlead Solutions</a></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;