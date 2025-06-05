import React from "react";
import "./AboutServicesCards.css";
import { Link } from "react-router-dom"; // ✅ Correct import


const AboutServicesCards = () => {
    const services = [
        {
            icon: "/images/icons/services/tailored-solutions.svg",
            title: "Manufacturing/ Engineering",
            description: "Our team excels in placing top talent across various roles, from design engineers to plant managers, ensuring the best fit for your needs."
        },
        {
            icon: "/images/icons/services/faster-hiring.svg",
            title: "Retail/Logistics",
            description: "We provide efficient hiring solutions tailored to the fast-paced retail and logistics sectors, focusing on reliability and exceptional customer service."
        },
        {
            icon: "/images/icons/services/top-talent.svg",
            title: "Oil/Gas",
            description: "We deliver skilled professionals, from engineers to project managers, with the certifications required to meet the high standards of the oil and gas industry."
        },
        {
            icon: "/images/icons/services/integration.svg",
            title: "BFSI",
            description: "We focus on hiring candidates with not only technical expertise but also strong analytical, problem-solving, and relationship-building skills in the BFSI sector."
        },
    ];

    return (
        <section className="about-services">
            <div className="about-services-content hero-home-content">
                <div style={{ width: "100%" }}>
                    <div className="about-services-header">
                        <img src="/images/icons/expand.svg" alt="Expand Icon" data-aos="fade-down"
                            data-aos-duration="1500" />
                        <h2 className="big-title " data-aos="fade-down"
                            data-aos-duration="2000">Platform designed to <span className="span-title">simplify<br />and enhance</span> the hiring process.</h2>
                        <p className="about-p-Container" data-aos="fade-up"
                            data-aos-duration="1500">With personalized solutions tailored to your business needs, we connect you with the best talent
                            quickly and efficiently, helping you build stronger, more effective teams.</p>
                    </div>
                    <div className="about-services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card" data-aos="fade-up"
                                data-aos-duration="1500" data-aos-delay={index * 300}>
                                <img src={service.icon} alt={service.title} />
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <br /><br />
                    <div className="about-card-button" style={{display:"flex",justifyContent:"center"}}>
                        <Link to="/AboutServicesCard"><button className="slide-btn consultation ">Learn more</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutServicesCards;