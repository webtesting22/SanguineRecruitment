import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import "./HeroHome.css";

const HeroHome = () => {
    const slides = [
        {
            id: 1,
            video: "https://prepseed.s3.ap-south-1.amazonaws.com/prod/ldoc/chat/SanguineBackgroundVideo.mp4",
            title: "Beyond Recruitment, We Build Partnerships",
            subtitle: "",
            description: "We dive deep into your culture, goals, and challenges. So every hire isn't just a fit — it's a long-term asset."
        },
        {
            id: 2,
            video: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/WhatsApp Video 2025-08-04 at 10.35.53.mp4",
            title: "Hire Smarter. Grow Faster.",
            subtitle: "",
            description: "From startups to enterprises, we deliver aligned talent solutions. Spend less time screening, more time scaling."
        }
    ];

    return (
        <>
            <div className="hero-swiper-container">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    effect="fade"
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    className="hero-swiper"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="slide-container">
                                <div className="slide-image">
                                    <video
                                        src={slide.video}
                                        muted
                                        autoPlay
                                        loop
                                        playsInline
                                    />
                                </div>
                                <div className="slide-overlay"></div>
                                <div className="slide-content">
                                    <div className="slide-text">
                                        <h2 className="text-center">{slide.subtitle}</h2>
                                        <h1 className="text-center">{slide.title}</h1>
                                        <p className="slide-description text-center">{slide.description}</p>
                                        {/* <div className="slide-buttons">
                                            <button className="primary-btn">Get Started</button>
                                            <button className="secondary-btn">Learn More</button>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </>
    );
};

export default HeroHome;