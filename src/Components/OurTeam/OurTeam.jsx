import React from "react";
import "./OurTeam.css"
import { Tag, Row, Col } from "antd";
const OurTeam = () => {


    const TeamCards = [
        {
            cardImage: "https://randomuser.me/api/portraits/men/32.jpg",
            cardTitle: "Rajesh Patel",
            cardDescription: "Expert in strategic HR planning with over 15 years of experience in recruitment and workforce development.",
            cardPosition: "Chief HR Officer"
        },
        {
            cardImage: "https://randomuser.me/api/portraits/women/44.jpg",
            cardTitle: "Sneha Mehta",
            cardDescription: "Leads talent acquisition initiatives and ensures alignment with corporate goals and culture.",
            cardPosition: "Talent Acquisition Manager"
        },
        {
            cardImage: "https://randomuser.me/api/portraits/men/65.jpg",
            cardTitle: "Amit Shah",
            cardDescription: "Specializes in employee engagement, retention strategies, and performance optimization.",
            cardPosition: "Employee Relations Head"
        },
        {
            cardImage: "https://randomuser.me/api/portraits/women/28.jpg",
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
                        <div className="HeaderPartCenter">
                            <Tag>Our Team</Tag>
                            <h2 className="big-title" style={{ textAlign: "center", marginBottom: "0px" }}>
                                Lorem ipsum dolor sit amet  <span className="span-title">voluptatibus aliquam.</span>
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, illo.</p>
                        </div>
                        <div className="TeamCardsContainer">
                            <Row>
                                {TeamCards.map((item, index) => (
                                    <Col lg={6}>
                                        <div key={index} className="TeamCardStyle">
                                            <div>
                                                <img src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
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