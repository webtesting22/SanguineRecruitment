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
        name: "ASMITA GAUTAM",
        role: "HR Business Partner",
        Description: "Landmark Group, Dubai",
        quote: "requirements and delivering services of veryhigh standards. Ihad the privilege to work with Sanguine during my tenureinLandmark Group andIhave always admired them for the quick responses,strong relationship building skills and lines description"
    },
    {
        businessTypes: ["Corporation", "Non-profit", "Other", "LLC"],
        avatar: "/images/avatars/daniel.jpg",
        name: "Karthcik Ravichandran",
        role: "HR Business PartnerSaint Gobain India Priv",
        Description: "Saint Gobain India Private Limited- Glass Business",
        quote: "Once you drop the requirement to Sanguine, you can feel relaxed and expect thequality at the right time. Sanguine as an organization wouldbe lucky to have Rituas their leader. She and her team earns my highest recommendation.!",
    },
    {
        businessTypes: ["Corporation", "Non-profit", "Other", "LLC"],
        avatar: "/images/avatars/daniel.jpg",
        name: "SWATI MAIR",
        role: "HR Business Partner & Talent Acquisition",
        Description: "Zaggle, Hyderabad",
        quote: "Sanguine possesses great technology acumen and client orientation skills andhaving a great team for recruitment especially in the technology niche hiring. Ihave greatly enjoyed working with Sanguine, as they have managed severalcrucialIT roles for us.",
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
        <Tag>Client Feedback</Tag>
    <h2 className="big-title">
        Hear from our <span className="span-title">happy clients.</span>
    </h2>
    <p className="testimonials-subtitle">
        Don’t just take our word for it—our clients say it all.
    </p>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    nextEl: ".SecondArrow",
                    prevEl: ".FirstArrow",
                }}
                slidesPerView={1}
                className="testimonials-swiper"
                loop
                speed={600}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {testimonials.map((t, idx) => (
                    <SwiperSlide key={idx}
                    >
                        <div className="testimonial-card">
                            {/* <div className="testimonial-business">
                                <div className="business-title">Business type</div>
                                <div className="business-pills">
                                    {t.businessTypes.map((type, i) => (
                                        <span className="business-pill" key={i}>{type}</span>
                                    ))}
                                </div>
                            </div> */}
                            <div className="testimonial-content">
                                <div className="testimonial-user">
                                    {/* <img src={t.avatar} alt={t.name} className="testimonial-avatar" /> */}
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