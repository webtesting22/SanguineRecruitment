import React from "react";
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
            image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/HomePageBanner.jpeg",
            title: "Beyond Recruitment, We Build Partnerships",
            subtitle: "",
            description: "We dive deep into your culture, goals, and challenges. So every hire isn't just a fit — it's a long-term asset."
        },
        {
            id: 2,
            image: "https://cdn.prod.website-files.com/680534957b5199127f2857e6/680ceae48021e647f307f1ee_image.avif",
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
                        delay: 3000,
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
                                    <img src={slide.image} alt={slide.title} />
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