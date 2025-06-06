import React from "react";
import { RiUserSmileFill } from "react-icons/ri";
import "./ContactCommonContainer.css"
// Your existing AnimatedBtn component (assuming it exists)
const AnimatedBtn = ({ text, hoverText, icon }) => {
    return (
        <button className="animated-btn">
            <span className="btn-content">
                {icon}
                <span>{text}</span>
            </span>
        </button>
    );
};

const ContactCommonSection = () => {
    const Color = "white"

    return (
        <>
            <div id="ContactCommonSectionContainer">
                <div className="contact-section-container">
                    {/* Enhanced Background with Animated Elements */}
                    <div className="background-overlay">
                        <div className="floating-elements">
                            <div className="element element-1"></div>
                            <div className="element element-2"></div>
                            <div className="element element-3"></div>
                            <div className="element element-4"></div>
                        </div>
                        <div className="grid-pattern"></div>
                    </div>

                    <div className="hero-home-content">
                        <div style={{ textAlign: "center" }} className="width-set-enhanced">
                            <div className="content-card">
                                {/* Professional Badge */}
                                <div className="professional-badge">
                                    <span className="badge-text">Professional Recruitment Solutions</span>
                                </div>

                                <h2 className="big-title-enhanced" style={{ color: Color }}>
                                    Take the first step toward building
                                    <span className="span-title-enhanced" style={{ color: Color }}> your ideal team.</span>
                                </h2>

                                <p className="description-enhanced" style={{ color: Color }}>
                                    Let us help you find the perfect talent to drive your business forward. Our recruitment solutions are designed to match you with the best candidates who fit both your requirements and company culture.
                                </p>

                                {/* Enhanced Button Layout */}
                                <div className="button-container-enhanced">
                                    <AnimatedBtn
                                        text="Free consultation"
                                        hoverText="Free consultation"
                                        icon={<RiUserSmileFill />}
                                    />
                                    {/* <AnimatedBtn
                                        text="Free consultation"
                                        hoverText="Free consultation"
                                        icon={<RiUserSmileFill />}
                                    /> */}
                                </div>

                                {/* Additional Professional Elements */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactCommonSection;