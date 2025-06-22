import React from "react";
import "./OurServices.css";
import { Tag } from "antd";
import { AnimatedBtn } from "../../CommonUsedComponents/AnimatedButton/AnimatedBtn";
import { RiUserSmileFill } from "react-icons/ri";
const steps = [
    {
        title: "Talent Acquisition Strategy",
        desc: "Access to top-tier talent, including passive candidates",
    },
    {
        title: "Optimized Recruitment Process",
        desc: "Streamlined recruitment process with cutting-edge evaluation techniques.",
    },
    {
        title: "Tailored Hiring Solutions",
        desc: "Industry insights and tailored hiring strategies.",
    },
    {
        title: "Enhanced Candidate Experience",
        desc: "Enhanced candidate experience to boost your employer reputation.",
    },
];


const OurServices = () => {
    return (
        <>
            <section className="our-services-section paddingSection">
                <div className="hero-home-content container">
                    <div className="our-services-overlay" />
                    <div className="our-services-content " >
                        <div className="Common-header">
                            <div className="TaglineWithIcon">
                                <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="" /><h2 className="text-center h2-gradient">Why Choose Sanguine? How Our Recruitment Process Works</h2>
                            </div>
                            <h1 className="text-center">
                                Seamless hiring experience to <span className="span-title" style={{ color: "white" }}> connect <br />
                                    businesses with exceptional talent.</span>
                            </h1>
                            <p className="white text-center">
                                We collaborate with you to understand your unique requirements, company culture, and hiring objectives.
                                This helps us craft a recruitment strategy that attracts the best-fit candidates.
                            </p>
                        </div>


                        <div className="margin-100">
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
                                            {/* <h2 className="small-title" style={{ color: "white" }}>
                                                Start building your dream team with our efficient, tailored recruitment process today.
                                            </h2> */}

                                            {/* <div style={{ display: "flex", justifyContent: "center" }}>
                                                <AnimatedBtn
                                                    text="Free consultation"
                                                    hoverText="Free consultation"
                                                    icon={<RiUserSmileFill />}
                                                />
                                            </div> */}
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