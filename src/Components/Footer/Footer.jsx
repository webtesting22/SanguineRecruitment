import React from "react";
import { Row, Col } from "antd";
import "./Footer.css"
import NavigationLinks from "../MegaNavigation/NavigationLinks";
const Footer = () => {

    const FollowData = [
        {
            title: "Instagram"
        },
        {
            title: "Linkedin"
        },
        {
            title: "YouTube"
        }
    ]

    const MobileNumber = "+(800)305909909"
    const Email = "info@example.com"
    const Adress = "8502 Preston Rd. Inglewood, Maine 98380"
    return (
        <>
            <div id="FooterContainer">
                <div className="FooterContentContainer">
                    <div className="FooterGridContainer hero-home-content">
                        <div style={{ width: "100%" }}>
                            <Row>
                                <Col lg={5}>
                                    <div>
                                        <div>
                                            <p><b>Navigate</b></p>
                                            {NavigationLinks.map((item, index) => (
                                                <p key={index}>
                                                    {item.link}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={5}>
                                    <div>
                                        <div>
                                            <p><b>Follow</b></p>
                                            {FollowData.map((item, index) => (
                                                <p key={index}>
                                                    {item.title}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={5}>
                                    <div>
                                        <div>
                                            <p><b>Contact</b></p>
                                            <p>{MobileNumber}</p>
                                            <p>{Email}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={5}>
                                    <div>
                                        <div>
                                            <p><b>Visit</b></p>
                                            <p>{Adress}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <br />
                            <p><i>Designed and developed by <b>OutLead Solutions</b> © 2025. All rights reserved.</i></p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Footer