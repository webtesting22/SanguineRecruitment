import React from "react";
import "./Services.css";
import { FaArrowRight } from 'react-icons/fa';
import ServicesCardsContent from "../AllHomeComponents/AboutServicesCards/ServicesData";
const Services = () => {

    return (
        <div className="services-section-container">
            <div className="paddingSection">
                <div className="container">
                    <div className="Common-header">
                        <div className="TaglineWithIcon" data-aos="blur-to-clear" data-aos-delay="200">
                            <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="" />
                            <h2 className="text-center h2-gradient">Our Services</h2>
                        </div>
                        <h1 className="text-center" data-aos="blur-to-clear" data-aos-delay="200">
                            Our <span className="black">Recruitment</span> Services
                        </h1>
                        <p className="text-center" data-aos="blur-to-clear" data-aos-delay="200">
                            At Sanguine Recruitment, we specialize in sourcing top talent across key industries, from Manufacturing and Logistics to Oil/Gas and BFSI. Our tailored hiring solutions ensure you get the right fit for each unique sector.
                        </p>
                    </div>
                    <div className="OurServicesBoxesContainer margin-100">
                        <div className="services-list">
                            {ServicesCardsContent.map((service, index) => (
                                <div 
                                    className="service-item" 
                                    key={index}
                                    data-aos="blur-to-clear"
                                    data-aos-delay="200"
                                    data-aos-duration="1200"
                                    data-aos-easing="ease-out"
                                >
                                    <img src={service.image} alt={service.title} className="service-hover-image" />
                                    <div className="service-title">
                                        <h1>{service.title}</h1>
                                    </div>
                                    <div className="service-description">
                                        <p>{service.description}</p>
                                    </div>
                                    <div className="service-arrow">
                                        <FaArrowRight style={{ fontSize: '13px' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;