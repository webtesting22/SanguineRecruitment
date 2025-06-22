import React from 'react';
import './OurServices.css';
import { StepOneIcon, StepTwoIcon, StepThreeIcon, StepFourIcon } from './StepIcons';

const OurServices = () => {
    const steps = [
        {
            icon: <StepOneIcon />,
            title: "Talent Acquisition Strategy",
            desc: "Access to top-tier talent, including passive candidates",
        },
        {
            icon: <StepTwoIcon />,
            title: "Optimized Recruitment Process",
            desc: "Streamlined recruitment process with cutting-edge evaluation techniques.",
        },
        {
            icon: <StepThreeIcon />,
            title: "Tailored Hiring Solutions",
            desc: "Industry insights and tailored hiring strategies.",
        },
        {
            icon: <StepFourIcon />,
            title: "Enhanced Candidate Experience",
            desc: "Enhanced candidate experience to boost your employer reputation.",
        }
    ];

    return (
        <div className="our-services-section paddingSection">
            <div className="container">
                <div className="Common-header">
                    <div className='TaglineWithIcon' data-aos="blur-to-clear" data-aos-delay="100">
                        <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="" />
                        <h2 className='text-center h2-gradient'>How It Works</h2>
                    </div>
                    <h1 className='text-center' data-aos="blur-to-clear" data-aos-delay="100">Seamless hiring experience to connect
                        businesses with exceptional talent.</h1>
                    <p className='text-center' data-aos="blur-to-clear" data-aos-delay="100">Our streamlined process simplifies hiring, delivering exceptional talent aligned with your business goals.
                    </p>
                </div>
                <div className="margin-100">
                    <div className="our-services-steps">
                        {steps.map((step, idx) => (
                            <div 
                                className="our-services-step" 
                                key={idx} 
                               
                            >
                               <div  data-aos="blur-to-clear" 
                                data-aos-delay="100"
                                data-aos-duration="1200"
                                data-aos-easing="ease-out">
                               <div className="step-icon-container">
                                    {step.icon}
                                </div>
                                <div className="step-divider" />
                                <div>
                                    <div className="step-title">{step.title}</div>
                                    <div className="step-desc">{step.desc}</div>
                                </div>
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
    );
};

export default OurServices;