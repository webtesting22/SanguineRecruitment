import React from "react";
import { Row, Col } from "antd";
import {
    RiPhoneFill,
    RiMailFill,
    RiMapPinFill,
    RiLinkedinFill,
    RiInstagramFill,
    RiYoutubeFill,
    RiArrowRightSLine,
} from "react-icons/ri";
import "./Footer.css"
import { Link } from "react-router-dom";
import NavigationLinks from "../MegaNavigation/NavigationLinks";

const Footer = () => {
    const FollowData = [
        {
            title: "LinkedIn",
            icon: <RiLinkedinFill />,
            url: "https://www.linkedin.com/company/sanguinerecruitment/"
        },
        {
            title: "Instagram",
            icon: <RiInstagramFill />,
            url: "#"
        },
        {
            title: "YouTube",
            icon: <RiYoutubeFill />,
            url: "#"
        }
    ];

    const services = [
        "Executive Search",
        "Talent Acquisition",
        "Contract Staffing",
        "HR Consulting",
        "Market Intelligence"
    ];

    const industries = [
        "Technology",
        "Healthcare",
        "Finance",
        "Manufacturing",
        "Retail"
    ];

    const MobileNumber = "+(800)305909909";
    const Email = "info@example.com";
    const Address = "8502 Preston Rd. Inglewood, Maine 98380";

    return (
        <>
            <div id="FooterContainer">
                <div className="footer-content-container">
                    
                    {/* Desktop/Tablet Footer - Hidden on Mobile */}
                    <div className="desktop-footer">
                        <div className="footer-main-section">
                            <div className="hero-home-content">
                                <Row gutter={[40, 40]} style={{ alignItems: "start" }}>
                                    <Col lg={6} md={12} sm={24}>
                                        <div className="footer-column">
                                            <h4 className="footer-column-title">Navigate</h4>
                                            <ul className="footer-links">
                                                {NavigationLinks.map((item, index) => (
                                                    <li key={index}>
                                                        <Link href={item.path} className="footer-link">
                                                            <RiArrowRightSLine className="link-icon" />
                                                            {item.link}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Col>

                                    <Col lg={6} md={12} sm={24}>
                                        <div className="footer-column">
                                            <h4 className="footer-column-title">Our Services</h4>
                                            <ul className="footer-links">
                                                {services.map((service, index) => (
                                                    <li key={index}>
                                                        <a href="#" className="footer-link">
                                                            <RiArrowRightSLine className="link-icon" />
                                                            {service}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Col>

                                    <Col lg={6} md={12} sm={24}>
                                        <div className="footer-column">
                                            <h4 className="footer-column-title">Industries</h4>
                                            <ul className="footer-links">
                                                {industries.map((industry, index) => (
                                                    <li key={index}>
                                                        <a href="#" className="footer-link">
                                                            <RiArrowRightSLine className="link-icon" />
                                                            {industry}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Col>

                                    <Col lg={6} md={12} sm={24}>
                                        <div className="footer-column">
                                            <h4 className="footer-column-title">Get in Touch</h4>
                                            <div className="contact-info">
                                                <div className="contact-item">
                                                    <RiPhoneFill className="contact-icon" />
                                                    <div>
                                                        <span className="contact-label">Call Us</span>
                                                        <a href={`tel:${MobileNumber}`} className="contact-value">
                                                            {MobileNumber}
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="contact-item">
                                                    <RiMailFill className="contact-icon" />
                                                    <div>
                                                        <span className="contact-label">Email Us</span>
                                                        <a href={`mailto:${Email}`} className="contact-value">
                                                            {Email}
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="contact-item">
                                                    <RiMapPinFill className="contact-icon" />
                                                    <div>
                                                        <span className="contact-label">Visit Us</span>
                                                        <span className="contact-value address">
                                                            {Address}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Minimal Footer - Visible only on Mobile */}
                    <div className="mobile-footer">
                        <div className="hero-home-content">
                            <div className="mobile-footer-content">
                                
                                {/* Contact Quick Access */}
                                <div className="mobile-contact-row">
                                    <a href={`tel:${MobileNumber}`} className="mobile-contact-item">
                                        <RiPhoneFill />
                                        <span>Call</span>
                                    </a>
                                    <a href={`mailto:${Email}`} className="mobile-contact-item">
                                        <RiMailFill />
                                        <span>Email</span>
                                    </a>
                                    <a href="#" className="mobile-contact-item">
                                        <RiMapPinFill />
                                        <span>Location</span>
                                    </a>
                                </div>

                                {/* Social Links */}
                                <div className="mobile-social-section">
                                    <div className="mobile-social-links">
                                        {FollowData.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.url}
                                                className="mobile-social-link"
                                                title={social.title}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Navigation */}
                                <div className="mobile-nav-section">
                                    <div className="mobile-nav-links">
                                        {NavigationLinks.slice(0, 4).map((item, index) => (
                                            <Link key={index} href={item.path} className="mobile-nav-link">
                                                {item.link}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom - Always Visible */}
                    <div className="footer-bottom">
                        <div className="hero-home-content">
                            <div className="footer-bottom-content">
                                <div className="copyright">
                                    <p>© 2025 <Link to="https://www.outleadsolutions.com/" style={{color:"white"}}>OutLead Solutions</Link>. All rights reserved.</p>
                                </div>
                                
                                {/* Desktop Social Links */}
                                

                                {/* Legal Links - Desktop Only */}
                                <div className="footer-bottom-links desktop-only">
                                    <a href="#" className="bottom-link">Privacy Policy</a>
                                    <a href="#" className="bottom-link">Terms of Service</a>
                                    <a href="#" className="bottom-link">Cookie Policy</a>
                                </div>
                                <div className="desktop-social-section">
                                    <div className="social-links">
                                        {FollowData.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.url}
                                                className="social-link"
                                                title={social.title}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;