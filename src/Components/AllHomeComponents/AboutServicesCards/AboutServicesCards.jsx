import React from "react";
import "./AboutServicesCards.css";
import { Link } from "react-router-dom"; // ✅ Correct import


const AboutServicesCards = () => {
    const services = [
        {
            icon: "/images/icons/IndustryIcons/Manufacturing Engineering.png",
            title: "Manufacturing/ Engineering",
            description: "Our team is dedicated to identifying and placing exceptional talent in roles ranging from design engineers to plant managers, ensuring the ideal match for your company's specific needs."
        },
        {
            icon: "/images/icons/IndustryIcons/RetailLogistics.png",
            title: "Retail/Logistics",
            description: "We offer specialized hiring solutions for the fast-moving retail and logistics sectors, focusing on efficiency, dependability, and top-tier customer service in every candidate we recommend."
        },
        {
            icon: "/images/icons/IndustryIcons/OilGas.png",
            title: "Oil/Gas",
            description: "We connect you with highly skilled professionals, from engineers to project managers, who possess the certifications and expertise required to meet the strict standards of the oil and gas industry."
        },
        {
            icon: "/images/icons/IndustryIcons/BFSI.png",
            title: "BFSI",
            description: "Our recruitment process identifies candidates who not only possess technical skills but also excel in critical areas like analytical thinking, problem-solving, and client relationship management in the BFSI sector."
        },
        {
            icon: "/images/icons/IndustryIcons/BFSI.png",
            title: "IT / E-Commerce",
            description: "We specialize in sourcing top-tier talent across the IT and e-commerce landscape — from software developers and data analysts to UI/UX designers and digital marketers — ensuring your organization stays agile, innovative, and customer-focused in the digital age."
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
                            data-aos-duration="2000">Industry-Specific Expertise to <span className="span-title">simplify<br />Fuel Your Success</span></h2>
                        <p className="about-p-Container" data-aos="fade-up"
                            data-aos-duration="1500">At Sanguine Recruitment, we specialize in sourcing top talent across key industries, from Manufacturing and Logistics to Oil/Gas and BFSI. Our tailored hiring solutions ensure you get the right fit for each unique sector.</p>
                    </div>
                    <div className="about-services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <div className="card-overlay"></div>
                                <div className="card-content">
                                    <img src={service.icon} alt={service.title} />
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br /><br />
                    {/* <div className="about-card-button" style={{ display: "flex", justifyContent: "center" }}>
                        <Link to="/AboutServicesCard"><button className="slide-btn consultation ">Learn more</button></Link>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default AboutServicesCards;