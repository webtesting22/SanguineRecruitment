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
            image: "https://cdn.prod.website-files.com/679765810ac8bcda652fca4a/67b482295a27fff1499d1714_Home%20Two%20Banner%20Image-p-3200.webp",
            title: "Marketing automations that grow with your business.",
            subtitle: "Explore our Marketing Solutions",
            description: "Studiolist provides Marketing automations to the investors for assuring business growth including branding, seo management, equity and impression boosting."
        },
        {
            id: 2,
            image: "https://cdn.prod.website-files.com/679765810ac8bcda652fca4a/67b480e236e32b30279d6bb9_Mask%20group%20(38)%20(2)-p-3200.webp",
            title: "Building Careers, Shaping Futures",
            subtitle: "Comprehensive recruitment services for your success",
            description: "From entry-level to executive positions, we find the perfect match"
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
                    // autoplay={{
                    //     delay: 2000,
                    //     disableOnInteraction: false,
                    // }}
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