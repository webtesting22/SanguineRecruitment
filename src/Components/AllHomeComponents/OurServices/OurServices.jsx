import React from "react";
import "./OurServices.css";
import { Tag } from "antd";
import { AnimatedBtn } from "../../CommonUsedComponents/AnimatedButton/AnimatedBtn";
import { RiUserSmileFill } from "react-icons/ri";
const steps = [
    {
        title: "Understand Your Needs",
        desc: "We begin by working closely with you to understand your business, culture, and specific hiring requirements.",
    },
    {
        title: "Recruitment Strategy",
        desc: "Based on your unique needs, we craft a personalized recruitment strategy designed to attract the best talent.",
    },
    {
        title: "Seamless Hiring Process",
        desc: "Using our platform's advanced tools, we match you with top candidates and integrate the process with your HR systems.",
    },
];

const OurServices = () => {
    return (
        <>
            <section className="our-services-section ">
                <div className="hero-home-content">
                    <div className="our-services-overlay" />
                    <div className="our-services-content " >
                        <Tag style={{ color: "white" }} data-aos="fade-down" data-aos-duration="1500">How it works</Tag>
                        <h2 className="big-title " style={{ color: "white" }} data-aos="fade-down" data-aos-duration="2000">
                            Efficient process to <span className="span-title" style={{ color: "white" }}> connect <br />
                                businesses with the best talent.</span>
                        </h2>
                        <p style={{ color: "white" }} data-aos="fade-up" data-aos-duration="1500">
                            We work closely with you to understand your unique needs, culture, and hiring goals.
                            Using this insight, we tailor a recruitment strategy that targets the right candidates.
                        </p>
                        <div className="our-services-steps">
                            {steps.map((step, idx) => (
                                <div className="our-services-step" key={idx} data-aos="fade-up" data-aos-duration="1500" data-aos-delay={idx * 300}>
                                    <div className="step-number">{idx + 1}</div>
                                    <div className="step-divider" />
                                    <div>
                                        <div className="step-title">{step.title}</div>
                                        <div className="step-desc">{step.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="OurServicesImageContainer">
                            <div>
                                {/* <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                                <div className="ImageContentContainer">
                                    <div>
                                        <h2 className="small-title " style={{ color: "white" }}>Get started with Linkrow today and discover a smarter, faster way to hire.</h2>
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            <AnimatedBtn
                                                text="Free consultation"
                                                hoverText="Free consultation"
                                                icon={<RiUserSmileFill />}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurServices;