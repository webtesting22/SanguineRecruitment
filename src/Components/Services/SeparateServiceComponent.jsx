import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SeparateServiceComponent.css";
import ServicesCardsContent from "../AllHomeComponents/AboutServicesCards/ServicesData";
import TopPartCommon from "../CommonUsedComponents/TopBarContainer/TopPartCommon";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SeparateServiceComponent = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [service, setService] = useState(null);
    const [scrollY, setScrollY] = useState(0);
    const [imageWidth, setImageWidth] = useState(70);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Find the service based on the slug
        const foundService = ServicesCardsContent.find(
            s => s.title.toLowerCase().replace(/[^a-z0-9]/g, '-') === slug
        );
        
        if (foundService) {
            setService(foundService);
        } else {
            // Redirect to 404 if service not found
            navigate('/404');
        }
    }, [slug, navigate]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScrollY(scrollPosition);
            
            // Calculate image width based on scroll position
            // Start at 70% and go up to 100% based on scroll
            const maxScroll = 500; // Scroll distance to reach 100% width
            const scrollProgress = Math.min(scrollPosition / maxScroll, 1);
            const newWidth = 80 + (scrollProgress * 20); // 70% to 100%
            
            setImageWidth(newWidth);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!service) {
        return <div>Loading...</div>;
    }

    return (
        <div className="separate-service-container">
            <TopPartCommon
                title={service.title}
                highlight={service.title}
                subtitle={service.subtitle}
            />
            <div className="margin-100 ">
                <div style={{overflow: "hidden"}}>
                <img 
                    src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68088cd9861c02a0f55415fc_senior-manager-is-sitting-boardroom-with-multiracial-colleagues-discussing-project.avif" 
                    alt="" 
                    className="parallax-image-container"
                    style={{
                        width: `${imageWidth}%`,
                        height: "100%",
                        objectFit: "cover",
                        transition: 'width 0.1s ease-out',
                        display: 'block',
                        margin: '0 auto'
                    }}
                />
                </div>
                <div className="paddingSection">
                    <div className="container">
                        {/* Overview Section */}
                        {service.overview && (
                            <div className="service-section" data-aos="blur-to-clear" data-aos-delay="100">
                                <h2>Overview</h2>
                                <p>{service.overview}</p>
                            </div>
                        )}

                        {/* Main Points Section */}
                        {service.mainPoints && service.mainPoints.length > 0 && (
                            <div className="service-section" data-aos="blur-to-clear" data-aos-delay="100">
                                <h2>Our Expertise</h2>
                                <div className="main-points-container">
                                    {service.mainPoints.map((point, index) => (
                                        <div key={index} className="main-point-card">
                                            <h3>{point.title}</h3>
                                            <p>{point.description}</p>
                                            {point.subPoints && point.subPoints.length > 0 && (
                                                <ul className="sub-points-list">
                                                    {point.subPoints.map((subPoint, subIndex) => (
                                                        <li key={subIndex}>{subPoint}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeparateServiceComponent;
