import React, { useState, useEffect } from "react";
import "./Career.css"
import { Tag, Row, Col } from "antd";
import TopPartCommon from "../CommonUsedComponents/TopBarContainer/TopPartCommon";
import CareerApplicationModal from "../CommonUsedComponents/CareerApplicationModal/CareerApplicationModal";
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
                        tag="Careers"
                        title="Join Our Team "
                        highlight="Careers"
                        subtitle="Shape your future with Sanguine Recruitment—where your growth, passion, and potential are valued. Discover opportunities to thrive, innovate, and make a real impact with us."
                    />
                </div>
                <div className="hero-home-content">
                    <div>
                        <div className="AboutCareer marginTop">
                            <Row>
                                <Col lg={12} md={24}>
                                    <div className="CareerAboutContentContainer" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                                        <div>
                                            <h1 className="big-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Be part of something bigger: build <span className="span-title">your career with us</span></h1>
                                            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">At Linkrow, we believe that our people are our greatest asset. We're not just offering jobs; we're building careers. Join a team where innovation meets collaboration, and every day brings new opportunities to grow and succeed.</p>
                                            <br />
                                            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"><b>What we offer</b></p>
                                            {ListPoints.map((item, index) => (
                                                <div className="ContentCardCareer" key={index} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={600 + (index * 100)}>
                                                    <p key={index}> <IoMdDoneAll />{item.title}</p>
                                                    <p>{item.content}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} md={24}>
                                    <div className="CareerSectionImage" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                                        <div>
                                            <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/businesswoman-analyzing-candidate-cv-discussing-hiring-cv-with-remote-man-online-videocall-meeting-businesspeople-working-company-strategy-discussing-partnership-startup-office.jpg" alt="" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="CareerPositionCard paddingSection">
                            <div style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                <div className="HeaderPartCenter">
                                    <Tag data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">Career</Tag>
                                    <h2 className="big-title" style={{ textAlign: "center", marginBottom: "0px" }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                        Join our team and shape <br /> the <span className="span-title">future together</span>
                                    </h2>
                                </div>
                            </div>
                            <br /><br />
                            <div>
                                <Row>
                                    {CareerPositions.map((item, index) => (
                                        <Col lg={12} md={12} key={index}>
                                            <div className="CareerCardDesign" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={500 + (index * 200)}>
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
                                
                                <CareerApplicationModal
                                    isVisible={isModalVisible}
                                    onCancel={handleCancel}
                                    positionTitle={selectedPositionTitle}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Career