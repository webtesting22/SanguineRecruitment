import React, { useState } from "react";

import { Tag, Row, Col } from "antd";
import "./Positions.css";
import CareerApplicationModal from "../../CommonUsedComponents/CareerApplicationModal/CareerApplicationModal";

const Positions = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedPositionTitle, setSelectedPositionTitle] = useState("");

    const showModal = (title) => {
        setSelectedPositionTitle(title);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedPositionTitle("");
    };

    const CareerPositions = [
        {
            positionTitle: "Senior Recruitment Consultant",
            positionDescription:
                "Lead client engagements, drive top-tier placements, and mentor junior consultants. Requires strong industry insight and a proven track record in successful hires.",
            positionTag: ["Full Time", "On-Site"],
        },
        {
            positionTitle: "Technical Recruitment Specialist",
            positionDescription:
                "Specialize in sourcing IT talent across development, QA, and DevOps roles. Must have solid understanding of tech stacks and developer ecosystems.",
            positionTag: ["Full Time", "Remote"],
        },
        {
            positionTitle: "Recruitment Consultant – BFSI Sector",
            positionDescription:
                "Manage end-to-end recruitment for banking, financial services, and insurance clients. Should have strong domain knowledge and talent pipeline building skills.",
            positionTag: ["Full Time", "Hybrid"],
        },
        {
            positionTitle: "Executive Search Consultant",
            positionDescription:
                "Focus on CXO and leadership hiring. Strong relationship management, discretion, and experience with retained search models preferred.",
            positionTag: ["Full Time", "On-Site"],
        },
        {
            positionTitle: "Junior Recruitment Consultant",
            positionDescription:
                "Support sourcing, screening, and interview coordination. Ideal for fresh graduates or candidates with 1–2 years of HR or recruitment experience.",
            positionTag: ["Full Time", "Remote"],
        },
    ];

    return (
        <div className="position-container margin-100">
            <div className="paddingSection">
                <div className="container">
                    {/* <div className="Common-header">
                        <div className="TaglineWithIcon aos-init aos-animate" data-aos-delay="100" data-aos="blur-to-clear">
                            <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="" />
                            <h2 className="text-center h2-gradient">Career</h2>
                        </div>
                        <h1 className="text-center" data-aos="blur-to-clear" data-aos-delay="200">Join our team and shape the future together</h1>
                        <p className="text-center" data-aos="blur-to-clear" data-aos-delay="200">At Linkrow, we believe that our people are our greatest asset. We're not just offering jobs; we're building careers. Join a team where innovation meets collaboration, and every day brings new opportunities to grow and succeed.</p>
                    </div> */}

                    {/* <div style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <div className="HeaderPartCenter">
                            <Tag data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">Career</Tag>
                            <h2 className="big-title" style={{ textAlign: "center", marginBottom: "0px" }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                Join our team and shape <br /> the <span className="span-title">future together</span>
                            </h2>
                        </div>
                    </div> */}
                    <br /><br />
                    <div className="CareerCardDesignContainer">
                        <Row gutter={[24, 24]}>
                            {CareerPositions.map((item, index) => (
                                <Col lg={8} md={12} key={index} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={500 + (index * 200)}>
                                    <div className="CareerCardDesign" >
                                        <div>
                                            <h2 style={{ marginTop: "0px" }}>{item.positionTitle}</h2>
                                            <p>{item.positionDescription}</p>
                                            <div style={{ marginTop: "10px" }}>
                                                {item.positionTag.map((tag, index) => (
                                                    <Tag key={index} color="blue">{tag}</Tag>
                                                ))}
                                            </div>
                                            <br />
                                            <br />
                                            <button
                                                className="slide-btn consultation"
                                                style={{ minWidth: "100%", padding: "10px 15px", fontSize: "15px" }}
                                                onClick={() => showModal(item.positionTitle)}
                                            >
                                                Apply now
                                            </button>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>

                        <CareerApplicationModal
                            isVisible={isModalVisible}
                            onCancel={handleCancel}
                            positionTitle={selectedPositionTitle}
                        />
                    </div>
                </div>
            </div>
            <div className="paddingSection" style={{ background: "#f8f9fa" }}>
                <div className="container">
                    <div className="common-application-section" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                        <div className="common-application-content">
                            <div className="Common-header">
                                <div className="TaglineWithIcon aos-init aos-animate" data-aos-delay="100" data-aos="blur-to-clear">
                                    <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="" />
                                    <h2 className="text-center h2-gradient">Career</h2>
                                </div>
                                <h1 className="text-center" data-aos="blur-to-clear" data-aos-delay="200">
                                    Don’t See a Role That Fits?
                                </h1>
                                <p className="text-center" data-aos="blur-to-clear" data-aos-delay="200">
                                    We're always on the lookout for passionate, driven individuals. If there’s no current opening that suits your skills, we still want to hear from you.
                                </p>
                                <p className="text-center" data-aos="blur-to-clear" data-aos-delay="200">
                                    Submit a general application — our team regularly reviews profiles and will reach out when a relevant opportunity comes up.
                                </p>
                            </div>

                            <br /><br />
                            <div className="common-application-button">
                                <button
                                    className="slide-btn consultation"
                                    onClick={() => showModal("General Application")}
                                >
                                    Submit Application
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Positions;   