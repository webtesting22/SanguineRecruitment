import React from "react";
import "./OurTeam.css"
import { Tag, Row, Col } from "antd";

const OurTeam = () => {
    const TeamCards = [
        {
            cardImage: (
                <svg viewBox="0 0 100 100" className="team-avatar">
                    <circle cx="50" cy="35" r="25" fill="#004675" />
                    <path d="M50 65 C 30 65 15 80 15 100 L 85 100 C 85 80 70 65 50 65" fill="#004675" />
                </svg>
            ),
            cardTitle: "Rajesh Patel",
            cardDescription: "Expert in strategic HR planning with over 15 years of experience in recruitment and workforce development.",
            cardPosition: "Chief HR Officer"
        },
        {
            cardImage: (
                <svg viewBox="0 0 100 100" className="team-avatar">
                    <circle cx="50" cy="35" r="25" fill="#004675" />
                    <path d="M50 65 C 30 65 15 80 15 100 L 85 100 C 85 80 70 65 50 65" fill="#004675" />
                </svg>
            ),
            cardTitle: "Sneha Mehta",
            cardDescription: "Leads talent acquisition initiatives and ensures alignment with corporate goals and culture.",
            cardPosition: "Talent Acquisition Manager"
        },
        {
            cardImage: (
                <svg viewBox="0 0 100 100" className="team-avatar">
                    <circle cx="50" cy="35" r="25" fill="#004675" />
                    <path d="M50 65 C 30 65 15 80 15 100 L 85 100 C 85 80 70 65 50 65" fill="#004675" />
                </svg>
            ),
            cardTitle: "Amit Shah",
            cardDescription: "Specializes in employee engagement, retention strategies, and performance optimization.",
            cardPosition: "Employee Relations Head"
        },
        {
            cardImage: (
                <svg viewBox="0 0 100 100" className="team-avatar">
                    <circle cx="50" cy="35" r="25" fill="#004675" />
                    <path d="M50 65 C 30 65 15 80 15 100 L 85 100 C 85 80 70 65 50 65" fill="#004675" />
                </svg>
            ),
            cardTitle: "Pooja Sharma",
            cardDescription: "Drives innovation in recruitment using data analytics and automation tools.",
            cardPosition: "Recruitment Technology Lead"
        }
    ];

    return (
        <>
            <div id="OurTeamContainer">
                <div className="hero-home-content">
                    <div style={{ width: "100%" }}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div className="HeaderPartCenter">
                                <Tag>Our Expert Team</Tag>
                                <h2 className="big-title" style={{ textAlign: "center", marginBottom: "0px" }}>
                                    Meet Our Recruitment <span className="span-title">Specialists</span>
                                </h2>
                                <p style={{ textAlign: "center" }}>Our team of experienced professionals combines industry expertise with personalized service to deliver exceptional recruitment solutions tailored to your needs.</p>
                            </div>
                        </div>
                        <div className="TeamCardsContainer">
                            <Row>
                                {TeamCards.map((item, index) => (
                                    <Col lg={6} key={index}>
                                        <div className="TeamCardStyle">
                                            <div className="team-avatar-container">
                                                {item.cardImage}
                                            </div>
                                            <div>
                                                <p className="testimonial-name" style={{ marginBottom: "0px" }}>{item.cardTitle}</p>
                                                <p style={{ marginTop: "5px" }}>{item.cardPosition}</p>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurTeam