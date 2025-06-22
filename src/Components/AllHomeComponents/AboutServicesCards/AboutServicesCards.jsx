import React from "react";
import "./AboutServicesCards.css";
import { Row, Col } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRight } from "react-icons/fa6";
import ServicesCardsContent from "./ServicesData";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
const AboutServicesCards = () => {
   
    return (
        <section className="container paddingSection">
            <div className="about-services-content hero-home-content">
                <div style={{ width: "100%" }}>
                    <div className="Common-header">
                        <div className="TaglineWithIcon" data-aos="blur-to-clear" data-aos-delay="100">
                            <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="" /><h2 className="text-center h2-gradient">Explore our Marketing Solutions</h2>
                        </div>
                        <h1 className="text-center" data-aos="blur-to-clear" data-aos-delay="100">Industry-Specific Expertise to simplify Fuel Your Success</h1>
                        <p className="about-p-Container text-center" data-aos="blur-to-clear" data-aos-delay="100">At Sanguine Recruitment, we specialize in sourcing top talent across key industries, from Manufacturing and Logistics to Oil/Gas and BFSI. Our tailored hiring solutions ensure you get the right fit for each unique sector.</p>
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