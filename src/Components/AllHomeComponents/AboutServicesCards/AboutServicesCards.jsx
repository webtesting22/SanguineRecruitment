import React from "react";
import "./AboutServicesCards.css";
import { Row, Col } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRight } from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
const AboutServicesCards = () => {
    const ServicesCardsContent = [
        {
            image: "https://cdn.prod.website-files.com/68054750168231fd02a29f30/680c725249c720006ce61227_Detailed%20View%20of%20Leather%20Cardholder02.avif",
            title: "Manufacturing/ Engineering",
            description: "Our team is dedicated to identifying and placing exceptional talent in roles ranging from design engineers to plant managers, ensuring the ideal match for your company's specific needs."
        },
        {
            image: "https://cdn.prod.website-files.com/68054750168231fd02a29f30/680c725249c720006ce61227_Detailed%20View%20of%20Leather%20Cardholder02.avif",
            title: "Retail/Logistics",
            description: "We offer specialized hiring solutions for the fast-moving retail and logistics sectors, focusing on efficiency, dependability, and top-tier customer service in every candidate we recommend."
        },
        {
            image: "https://cdn.prod.website-files.com/68054750168231fd02a29f30/680c725249c720006ce61227_Detailed%20View%20of%20Leather%20Cardholder02.avif",
            title: "Oil/Gas",
            description: "We connect you with highly skilled professionals, from engineers to project managers, who possess the certifications and expertise required to meet the strict standards of the oil and gas industry."
        },
        {
            image: "https://cdn.prod.website-files.com/68054750168231fd02a29f30/680c725249c720006ce61227_Detailed%20View%20of%20Leather%20Cardholder02.avif",
            title: "BFSI",
            description: "Our recruitment process identifies candidates who not only possess technical skills but also excel in critical areas like analytical thinking, problem-solving, and client relationship management in the BFSI sector."
        },
        {
            image: "https://cdn.prod.website-files.com/68054750168231fd02a29f30/680c725249c720006ce61227_Detailed%20View%20of%20Leather%20Cardholder02.avif",
            title: "BFSI",
            description: "Our recruitment process identifies candidates who not only possess technical skills but also excel in critical areas like analytical thinking, problem-solving, and client relationship management in the BFSI sector."
        },
    ];

    return (
        <section className="container paddingSection">
            <div className="about-services-content hero-home-content">
                <div style={{ width: "100%" }}>
                    <div className="Common-header">
                        <div className="TaglineWithIcon">
                            <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="" /><h2 className="text-center h2-gradient">Explore our Marketing Solutions</h2>
                        </div>
                        <h1 className="text-center">Industry-Specific Expertise to simplify Fuel Your Success</h1>
                        <p className="about-p-Container text-center">At Sanguine Recruitment, we specialize in sourcing top talent across key industries, from Manufacturing and Logistics to Oil/Gas and BFSI. Our tailored hiring solutions ensure you get the right fit for each unique sector.</p>
                    </div>
                    <div className="ServicesCardsContainer centerContainer margin-100">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            freeMode={true}
                            loop={true}
                            speed={800}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 25
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                },
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 30
                                }
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination, Autoplay]}
                            className="mySwiper w-100"
                        >
                            {ServicesCardsContent.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="AnimatedCardsHoverAnimation">
                                        <img src={item.image} alt="" />
                                        <div className="ContentButtonContainer">
                                            <Row className="w-100">
                                                <Col lg={20}>
                                                    <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
                                                        <h2 className="white">{item.title}</h2>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="AnimatedArrowContainer">
                                                        <FaArrowRight />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutServicesCards;