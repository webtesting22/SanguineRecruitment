import React, { useState } from "react";
import { Row, Col, Tag, Modal } from "antd";
import TopPartCommon from "../CommonUsedComponents/TopBarContainer/TopPartCommon";
import clientData from "../AllHomeComponents/SanguineClients/ClientData";
import CareerApplicationModal from "../CommonUsedComponents/CareerApplicationModal/CareerApplicationModal";
import "./WorkWithUs.css";

const WorkWithUs = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isJobDetailsModalVisible, setIsJobDetailsModalVisible] = useState(false);
    const [selectedPositionTitle, setSelectedPositionTitle] = useState("");
    const [selectedPosition, setSelectedPosition] = useState(null);

    const showJobDetailsModal = (position) => {
        setSelectedPosition(position);
        setIsJobDetailsModalVisible(true);
    };

    const showApplicationModal = () => {
        setIsJobDetailsModalVisible(false);
        setSelectedPositionTitle(selectedPosition.title);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedPositionTitle("");
    };

    const handleJobDetailsCancel = () => {
        setIsJobDetailsModalVisible(false);
        setSelectedPosition(null);
    };

    const internalPositions = [
        {
            title: "Talent Acquisition Specialist",
            location: "Remote/ Jaipur",
            experience: "1-3 years of experience as a talent acquisition specialist, or similar/ Freshers",
            qualifications: "MBA/PGDM in Human Resource Management or a relevant field (Preferably HR)",
            positionDescription: "We are looking for a talented Talent Acquisition Specialist to join our growing team. This role focuses on attracting and hiring top-tier talent for our organization and clients.",
            positionTag: ["Full Time", "Remote", "Jaipur"],
            designation: "Talent Acquisition Specialist",
            industry: "Recruitment",
            aboutRole: "We are looking for a talented Talent Acquisition Specialist to join our growing team. This role focuses on attracting and hiring top-tier talent for our organization and clients. You will play a key role in developing sourcing strategies, conducting interviews, and ensuring a smooth recruitment process.",
            responsibilities: [
                "Develop and implement effective sourcing strategies to attract top-tier talent",
                "Conduct thorough screening and interviews to assess candidates' qualifications, skills, and alignment with job requirements",
                "Facilitate interview follow-ups, coordinate interview logistics, and schedule shortlisted candidates",
                "Maintain Recruitment Turnaround Time (TAT) and create a comprehensive Profiles Database",
                "Ensure adherence to timelines for critical and on-going assignments through effective deliverance management",
                "Prepare and submit MIS reports to Top Management, providing insights into recruitment activities",
                "Develop and execute action plans for assignments, ensuring efficient execution of recruitment processes",
                "Stay abreast of industry trends and adopt innovative recruiting and interviewing techniques to maintain competitiveness"
            ],
            requirements: [
                "Proficiency in MS Office applications",
                "Excellent written and Verbal Communication",
                "Access to a personal laptop and mobile phone with active WhatsApp connectivity"
            ],
            whyJoinUs: [
                "Fast-paced, entrepreneurial work culture",
                "Opportunity to work with diverse clients across industries",
                "Professional growth and development opportunities",
                "Make a direct impact on organizational success"
            ]
        }
    ];

    const service = {
        title: "Work With Us",
        subtitle: "Work With Us",
    }
    
    return (
        <div className="work-with-us-container">
            <TopPartCommon
                title={service.title}
                highlight={service.title}
                subtitle={service.subtitle}
            />
            
            <div className="clients-section paddingSection margin-100">
                <div className="container">
                    <div className="Common-header">
                        <div className="TaglineWithIcon" data-aos="blur-to-clear" data-aos-delay="100">
                            <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="Decorative stars icon" />
                            <h2 className="text-center h2-gradient">Our Valued Clients</h2>
                        </div>
                        <h1 className="text-center" data-aos="blur-to-clear" data-aos-delay="200">
                            Trusted by Industry <span className="black">Leaders</span>
                        </h1>
                        <p className="text-center" data-aos="blur-to-clear" data-aos-delay="300">
                            We're proud to partner with leading companies across various industries, delivering exceptional recruitment solutions that drive their success.
                        </p>
                    </div>

                    <div className="clients-grid margin-100">
                        <Row gutter={[24, 24]}>
                            {clientData.map((client, index) => (
                                <Col lg={4} md={8} sm={12} xs={12} key={index}>
                                    <div 
                                        className="client-card"
                                        data-aos="fade-up"
                                        data-aos-delay={100 + (index * 50)}
                                        data-aos-duration="800"
                                    >
                                        <div className="card-content">
                                            <div className="client-logo">
                                                <img src={client.logo} alt={client.name} />
                                            </div>
                                            <div className="client-overlay">
                                                <a 
                                                    href={client.website} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="website-link"
                                                >
                                                    Visit Website
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>

            <div className="career-section paddingSection">
                <div className="container">
                    <div className="Common-header">
                        <div className="TaglineWithIcon" data-aos="blur-to-clear" data-aos-delay="100">
                            <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="Decorative stars icon" />
                            <h2 className="text-center h2-gradient">Join Our Team</h2>
                        </div>
                        <h1 className="text-center" data-aos="blur-to-clear" data-aos-delay="200">
                            Grow With <span className="black">Sanguine</span>
                        </h1>
                        <p className="text-center" data-aos="blur-to-clear" data-aos-delay="300">
                            At Sanguine Recruitment, we value passion, purpose, and potential. Explore career opportunities where you can thrive, innovate, and make a meaningful impact every day.
                        </p>
                    </div>

                    <div className="CareerCardDesignContainer margin-100">
                        <Row gutter={[24, 24]}>
                            {internalPositions.map((position, index) => (
                                <Col lg={8} md={12} key={index} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={500 + (index * 200)}>
                                    <div className="CareerCardDesign">
                                        <div>
                                            <h2 style={{ marginTop: "0px" }}>{position.title}</h2>
                                            <p>{position.positionDescription}</p>
                                            <div style={{ marginTop: "10px" }}>
                                                {position.positionTag.map((tag, index) => (
                                                    <Tag key={index} color="blue">{tag}</Tag>
                                                ))}
                                            </div>
                                            <br />
                                            <br />
                                            <button
                                                className="slide-btn consultation"
                                                style={{ minWidth: "100%", padding: "10px 15px", fontSize: "15px" }}
                                                onClick={() => showJobDetailsModal(position)}
                                            >
                                                Apply now
                                            </button>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>

            {/* Job Details Modal */}
            <Modal
                title={selectedPosition?.title || "Job Details"}
                open={isJobDetailsModalVisible}
                onCancel={handleJobDetailsCancel}
                footer={null}
                width={700}
                className="job-details-modal"
            >
                {selectedPosition && (
                    <div className="job-details-content">
                        <div className="job-details-header">
                            <div className="job-meta-info">
                                <div className="meta-item">
                                    <strong>Location:</strong> {selectedPosition.location}
                                </div>
                                <div className="meta-item">
                                    <strong>Designation:</strong> {selectedPosition.designation}
                                </div>
                                <div className="meta-item">
                                    <strong>Experience:</strong> {selectedPosition.experience}
                                </div>
                                <div className="meta-item">
                                    <strong>Industry:</strong> {selectedPosition.industry}
                                </div>
                            </div>
                            <div className="job-tags">
                                {selectedPosition.positionTag.map((tag, index) => (
                                    <Tag key={index} color="blue">{tag}</Tag>
                                ))}
                            </div>
                        </div>
                        
                        <div className="job-details-description">
                            <h3>About the Role</h3>
                            <p>{selectedPosition.aboutRole}</p>
                        </div>

                        <div className="job-details-responsibilities">
                            <h3>Key Responsibilities</h3>
                            <ul>
                                {selectedPosition.responsibilities.map((responsibility, index) => (
                                    <li key={index}>{responsibility}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="job-details-requirements">
                            <h3>Requirements</h3>
                            <ul>
                                {selectedPosition.requirements.map((requirement, index) => (
                                    <li key={index}>{requirement}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="job-details-qualification">
                            <h3>Qualification</h3>
                            <p>{selectedPosition.qualifications}</p>
                        </div>

                        <div className="job-details-benefits">
                            <h3>Why Join Us</h3>
                            <ul>
                                {selectedPosition.whyJoinUs.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="job-details-actions">
                            <button
                                className="slide-btn consultation"
                                onClick={showApplicationModal}
                                style={{ minWidth: "200px", padding: "12px 24px", fontSize: "16px" }}
                            >
                                Apply for this Position
                            </button>
                        </div>
                    </div>
                )}
            </Modal>

            <CareerApplicationModal
                isVisible={isModalVisible}
                onCancel={handleCancel}
                positionTitle={selectedPositionTitle}
                internalPositions={internalPositions}
            />
        </div>
    );
};

export default WorkWithUs;