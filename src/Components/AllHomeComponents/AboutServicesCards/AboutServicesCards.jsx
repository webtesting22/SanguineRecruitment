import React from "react";
import "./AboutServicesCards.css";
import { Row, Col } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRight } from "react-icons/fa6";
import ServicesCardsContent from "./ServicesData";
import { useNavigate } from "react-router-dom";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const AboutServicesCards = () => {
    const navigate = useNavigate();

    const handleServiceClick = (service) => {
        // Convert service title to URL-friendly slug
        const slug = service.title.toLowerCase().replace(/[^a-z0-9]/g, '-');
        navigate(`/services/${slug}`);
    };

    return (
        <section className="container paddingSection">
            <div className="about-services-content hero-home-content">
                <div style={{ width: "100%" }}>
                    <div className="Common-header">
                        <div className="TaglineWithIcon" data-aos="blur-to-clear" data-aos-delay="100">
                            <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="" />
                            <h2 className="text-center h2-gradient">Tailored Hiring for Every Industry</h2>
                        </div>
                        <h1 className="text-center" data-aos="blur-to-clear" data-aos-delay="100">Expertise That Understands Your Domain</h1>
                        <p className="about-p-Container text-center" data-aos="blur-to-clear" data-aos-delay="100">
                            From Manufacturing, Automotive, Construction to Fashion Retail and Luxury, we bring deep sector knowledge and a vast talent network. Our industry-aligned recruitment ensures every hire matches your technical needs and cultural goals.
                        </p>
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
                                    <div
                                        className="AnimatedCardsHoverAnimation"
                                        data-aos="blur-to-clear"
                                        data-aos-delay="100"
                                        data-aos-duration="1200"
                                        data-aos-easing="ease-out"
                                        onClick={() => handleServiceClick(item)}
                                        style={{ cursor: 'pointer' }}
                                    >
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