import React, { useState, useEffect } from "react";
import "./Career.css"
import { Tag, Row, Col, Modal } from "antd";
import TopPartCommon from "../CommonUsedComponents/TopBarContainer/TopPartCommon";
import { IoMdDoneAll } from "react-icons/io";
const Career = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedPositionTitle, setSelectedPositionTitle] = useState("");
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const showModal = (title) => {
        setSelectedPositionTitle(title);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedPositionTitle("");
    };

    const ListPoints = [
        {
            title: "Comprehensive Benefits Package",
            content: "Including health insurance, retirement plans, and paid time off"
        },
        {
            title: "Flexible Work Options",
            content: "Hybrid and remote work opportunities to fit your lifestyle"
        },
        {
            title: "A Culture of Innovation",
            content: "Collaborate with passionate professionals dedicated to pushing boundaries"
        }
    ]

    const CareerPositions = [
        {
            positionTitle: "Senior Recruitment Consultant",
            positionDescription:
                "Responsible for managing client relationships, sourcing top talent, and mentoring junior consultants. Must have strong industry knowledge and proven placement track record.",
            positionTag: ["Full Time", "On-Site"]
        },
        {
            positionTitle: "Technical Recruitment Specialist",
            positionDescription:
                "Focus on hiring IT and tech roles. Should have experience working with developer, QA, and DevOps profiles. Understanding of tech stacks and developer communities is a must.",
            positionTag: ["Remote", "Full Time"]
        },
        {
            positionTitle: "Recruitment Consultant – BFSI Sector",
            positionDescription:
                "Expertise in banking, financial services, and insurance recruitment. Responsible for end-to-end hiring and building talent pipelines for BFSI clients.",
            positionTag: ["Full Time", "Hybrid"]
        },
        {
            positionTitle: "Executive Search Consultant",
            positionDescription:
                "Specializes in leadership and CXO-level hiring. Strong communication and negotiation skills needed. Experience with retained search is preferred.",
            positionTag: ["Full Time", "On-Site"]
        },
        {
            positionTitle: "Junior Recruitment Consultant",
            positionDescription:
                "Assist in candidate sourcing, screening, and coordinating interviews. Ideal for freshers or those with 1-2 years experience in HR or recruitment.",
            positionTag: ["Full Time", "Remote"]
        }
    ];

    return (
        <>
            <div id="CareerContainer">
                <div>
                    <TopPartCommon
                        tag="Career"
                        title="Join "
                        highlight="us"
                        subtitle="Take the next step toward a fulfilling career with endless opportunities to grow and succeed"
                    />
                </div>
                <div className="hero-home-content">
                    <div>
                        <div className="AboutCareer marginTop">
                            <Row>
                                <Col lg={12} md={24}>
                                    <div className="CareerAboutContentContainer">
                                        <div>

                                            <h1 className="big-title">Be part of something bigger: build <span className="span-title">your career with us</span></h1>
                                            <p>At Linkrow, we believe that our people are our greatest asset. We’re not just offering jobs; we’re building careers. Join a team where innovation meets collaboration, and every day brings new opportunities to grow and succeed.</p>
                                            <br />
                                            <p><b>What we offer</b></p>

                                            {ListPoints.map((item, index) => (
                                                <div className="ContentCardCareer" key={index}>
                                                    <p key={index}> <IoMdDoneAll />{item.title}</p>
                                                    <p>{item.content}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} md={24}>
                                    <div className="CareerSectionImage">
                                        <div>
                                            <img src="https://images.unsplash.com/photo-1575603760088-05ae2e4c0ab3?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="CareerPositionCard marginTop">
                            <div>
                                <div className="HeaderPartCenter">
                                    <Tag>Career</Tag>
                                    <h2 className="big-title" style={{ textAlign: "center", marginBottom: "0px" }}>
                                        Join our team and shape <br /> the <span className="span-title">future together</span>
                                    </h2>
                                </div>
                            </div>
                            <br /><br />
                            <div>
                                <Row>
                                    {CareerPositions.map((item, index) => (
                                        <Col lg={12} md={12} key={index}>
                                            <div className="CareerCardDesign" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 300}>
                                                <div>
                                                    <h2 style={{ marginTop: "0px" }}>{item.positionTitle}</h2>
                                                    <p>{item.positionDescription}</p>
                                                    <div style={{ marginTop: "10px" }}>
                                                        {item.positionTag.map((tag, index) => (
                                                            <Tag key={index} color="blue">{tag}</Tag>
                                                        ))}
                                                    </div>
                                                    <br />
                                                    <button
                                                        className="slide-btn consultation"
                                                        style={{ minWidth: "150px", padding: "10px 15px", fontSize: "15px" }}
                                                        onClick={() => showModal(item.positionTitle)}
                                                    >
                                                        Apply now
                                                    </button>

                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                                <Modal
                                    title={`Apply for: ${selectedPositionTitle}`}
                                    open={isModalVisible}
                                    onCancel={handleCancel}
                                    footer={null}
                                    width={800}
                                >
                                    <p>Please fill out the application form for the <b>{selectedPositionTitle}</b> role. You may attach your resume and submit your contact details.</p>
                                    {/* You can add form inputs here later */}
                                </Modal>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Career