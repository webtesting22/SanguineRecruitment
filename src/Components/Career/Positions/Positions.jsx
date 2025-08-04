import React, { useState } from "react";

import { Tag, Row, Col, Modal } from "antd";
import "./Positions.css";
import CareerApplicationModal from "../../CommonUsedComponents/CareerApplicationModal/CareerApplicationModal";
import CareerPositions from "./PositionsData";

const Positions = () => {
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
        setSelectedPositionTitle(selectedPosition.positionTitle);
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
                                                onClick={() => showJobDetailsModal(item)}
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
                                    Don't See a Role That Fits?
                                </h1>
                                <p className="text-center" data-aos="blur-to-clear" data-aos-delay="200">
                                    We're always on the lookout for passionate, driven individuals. If there's no current opening that suits your skills, we still want to hear from you.
                                </p>
                                <p className="text-center" data-aos="blur-to-clear" data-aos-delay="200">
                                    Submit a general application — our team regularly reviews profiles and will reach out when a relevant opportunity comes up.
                                </p>
                            </div>

                            <br /><br />
                            <div className="common-application-button">
                                <button
                                    className="slide-btn consultation"
                                    onClick={() => showJobDetailsModal({
                                        positionTitle: "General Application",
                                        positionDescription: "Submit a general application for future opportunities. Our recruitment team regularly reviews applications and may reach out when suitable positions become available.",
                                        positionTag: ["Flexible", "Various Roles"]
                                    })}
                                >
                                    Submit Application
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Job Details Modal */}
            <Modal
                title={selectedPosition?.positionTitle || "Job Details"}
                open={isJobDetailsModalVisible}
                onCancel={handleJobDetailsCancel}
                footer={null}
                width={700}
                className="job-details-modal"
            >
                {selectedPosition && (
                    <div className="job-details-content">
                        <div className="job-details-header">
                            {/* <h2>{selectedPosition.positionTitle}</h2> */}
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

                        {selectedPosition.experienceSkills && (
                            <div className="job-details-requirements">
                                <h3>Experience & Skills Required</h3>
                                <ul>
                                    {selectedPosition.experienceSkills.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {selectedPosition.qualification && (
                            <div className="job-details-qualification">
                                <h3>Qualification</h3>
                                <p>{selectedPosition.qualification}</p>
                            </div>
                        )}

                        {selectedPosition.rolesResponsibilities && (
                            <div className="job-details-responsibilities">
                                <h3>Roles & Responsibilities</h3>
                                <ul>
                                    {selectedPosition.rolesResponsibilities.map((responsibility, index) => (
                                        <li key={index}>{responsibility}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {selectedPosition.whatYoullDo && (
                            <div className="job-details-what-youll-do">
                                <h3>What You'll Do</h3>
                                <ul>
                                    {selectedPosition.whatYoullDo.map((task, index) => (
                                        <li key={index}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {selectedPosition.whatWereLookingFor && (
                            <div className="job-details-requirements">
                                <h3>What We're Looking For</h3>
                                <ul>
                                    {selectedPosition.whatWereLookingFor.map((requirement, index) => (
                                        <li key={index}>{requirement}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {selectedPosition.whyJoinUs && (
                            <div className="job-details-benefits">
                                <h3>Why Join Us?</h3>
                                <ul>
                                    {selectedPosition.whyJoinUs.map((benefit, index) => (
                                        <li key={index}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="job-details-actions">
                            <button
                                className="slide-btn consultation"
                                onClick={showApplicationModal}
                                style={{
                                    minWidth: "200px",
                                    padding: "12px 24px",
                                    fontSize: "16px",
                                    marginTop: "20px"
                                }}
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Positions;   