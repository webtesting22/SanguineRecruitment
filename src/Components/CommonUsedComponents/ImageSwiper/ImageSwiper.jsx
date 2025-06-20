import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ImageSwiper.css";

const ImageSwiper = ({ overlayOpacity = 0.4, showOverlay = true }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: "https://cdn.prod.website-files.com/679765810ac8bcda652fca4a/67b482295a27fff1499d1714_Home%20Two%20Banner%20Image-p-3200.webp",
            title: "Professional Recruitment Solutions",
            subtitle: "Connecting top talent with leading organizations"
        },
        {
            id: 2,
            image: "https://cdn.prod.website-files.com/679765810ac8bcda652fca4a/67b480e236e32b30279d6bb9_Mask%20group%20(38)%20(2)-p-3200.webp",
            title: "Expert Talent Acquisition",
            subtitle: "Building successful careers and thriving businesses"
        }
    ];

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.realIndex);
    };

    return (
        <div className="image-swiper-container">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                onSlideChange={handleSlideChange}
                className="image-swiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="slide-container">
                            <div 
                                className="slide-image"
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                }}
                            />
                            {showOverlay && (
                                <div 
                                    className="slide-overlay"
                                    style={{
                                        backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
                                    }}
                                />
                            )}
                            <div className="slide-content">
                                <h2 className="slide-title">{slide.title}</h2>
                                <p className="slide-subtitle">{slide.subtitle}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev custom-nav-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="swiper-button-next custom-nav-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            {/* Slide Counter */}
            <div className="slide-counter">
                <span className="current-slide">{currentSlide + 1}</span>
                <span className="slide-separator">/</span>
                <span className="total-slides">{slides.length}</span>
            </div>
        </div>
    );
};

export default ImageSwiper; 