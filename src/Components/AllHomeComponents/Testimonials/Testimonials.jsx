import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonials.css";
import { Tag } from "antd";
import { Autoplay } from "swiper/modules";
const testimonials = [
    {
        businessTypes: ["Corporation", "Non-profit", "Other", "LLC"],
        avatar: "/images/avatars/daniel.jpg",
        name: "Daniel Forden",
        role: "Data Analyst",
        quote: "Their tailored recruitment strategy helped us find the perfect fit for several key positions, and we were able to fill roles faster than ever before. The quality of candidates has been outstanding!",
    },
    {
        businessTypes: ["Corporation", "Non-profit", "Other", "LLC"],
        avatar: "/images/avatars/daniel.jpg",
        name: "Daniel Forden",
        role: "Data Analyst",
        quote: "Their tailored recruitment strategy helped us find the perfect fit for several key positions, and we were able to fill roles faster than ever before. The quality of candidates has been outstanding!",
    },
    {
        businessTypes: ["Corporation", "Non-profit", "Other", "LLC"],
        avatar: "/images/avatars/daniel.jpg",
        name: "Daniel Forden",
        role: "Data Analyst",
        quote: "Their tailored recruitment strategy helped us find the perfect fit for several key positions, and we were able to fill roles faster than ever before. The quality of candidates has been outstanding!",
    },
    {
        businessTypes: ["Corporation", "Non-profit", "Other", "LLC"],
        avatar: "/images/avatars/daniel.jpg",
        name: "Daniel Forden",
        role: "Data Analyst",
        quote: "Their tailored recruitment strategy helped us find the perfect fit for several key positions, and we were able to fill roles faster than ever before. The quality of candidates has been outstanding!",
    },

    // Add more testimonials as needed
];

const Testimonials = () => (
    <section className="testimonials-section sidepadding">
        <img
            src="/images/background/testimonials-bg.svg"
            alt=""
            className="testimonials-bg"
            aria-hidden="true"
        />
        <div className="testimonials-container">
            <Tag>Testimonials</Tag>
            <h2 className="big-title " >You're in good <span className="span-title">company.</span></h2>
            <p className="testimonials-subtitle">You don't have to trust our word</p>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    nextEl: ".SecondArrow",
                    prevEl: ".FirstArrow",
                }}
                slidesPerView={1}
                className="testimonials-swiper"
                loop
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {testimonials.map((t, idx) => (
                    <SwiperSlide key={idx}
                    >
                        <div className="testimonial-card">
                            <div className="testimonial-business">
                                <div className="business-title">Business type</div>
                                <div className="business-pills">
                                    {t.businessTypes.map((type, i) => (
                                        <span className="business-pill" key={i}>{type}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="testimonial-user">
                                    <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                                    <div>
                                        <div className="testimonial-name">{t.name}</div>
                                        <div className="testimonial-role">{t.role}</div>
                                    </div>
                                </div>
                                <div className="testimonial-quote">
                                    “{t.quote}”
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <button className="testimonial-arrow FirstArrow" aria-label="Previous testimonial">&lt;</button>
                <br /><br />
                <button className="testimonial-arrow SecondArrow" aria-label="Next testimonial">&gt;</button>
            </Swiper>
        </div>
    </section>
);

export default Testimonials;