import React from "react";
import "./AboutServicesCards.css";

const AboutServicesCards = () => {
    const services = [
        {
            icon: "/images/icons/services/tailored-solutions.svg",
            title: "Tailored Solutions",
            description: "Custom recruitment strategies designed for your unique business needs."
        },
        {
            icon: "/images/icons/services/faster-hiring.svg",
            title: "Faster Hiring",
            description: "Streamlined processes that cut hiring time by 30%."
        },
        {
            icon: "/images/icons/services/top-talent.svg",
            title: "Access to Top Talent",
            description: "Connect with highly qualified candidates across Industries."
        },
        {
            icon: "/images/icons/services/integration.svg",
            title: "Effortless Integration",
            description: "Seamlessly integrate our platform with your existing HR tools for a hiring experience."
        }
    ];

    return (
        <section className="about-services">
            <div className="about-services-content hero-home-content">
                <div style={{width:"100%"}}>
                    <div className="about-services-header">
                        <img src="/images/icons/expand.svg" alt="Expand Icon"  data-aos="fade-down"
                                data-aos-duration="1500"/>
                        <h2 className="big-title " data-aos="fade-down"
                                data-aos-duration="2000">Platform designed to <span className="span-title">simplify<br />and enhance</span> the hiring process.</h2>
                        <p data-aos="fade-up"
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
                </div>
            </div>
        </section>
    );
};

export default AboutServicesCards;