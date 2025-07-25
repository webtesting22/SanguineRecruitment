import React, { useState, useRef, useEffect } from "react";
import { Row, Col } from "antd";
import "./SanguineLife.css";
import AnimatedBtn from "../CommonUsedComponents/AnimatedButton/AnimatedBtn";
import { RiUserSmileFill, RiTeamFill, RiLightbulbFill, RiRocketFill } from "react-icons/ri";

const SanguineLife = () => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const parallaxRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate parallax scale
    const getParallaxScale = () => {
        if (!parallaxRef.current) return 1;

        const rect = parallaxRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;

        const visiblePercentage = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)));
        return 1 + (visiblePercentage * 0.1);
    };

    const cultureValues = [
        {
            icon: <RiTeamFill />,
            title: "Collaborative Excellence",
            description: "We believe in the power of teamwork. Our open office culture fosters innovation through collaboration, where every voice matters and ideas flourish."
        },
        {
            icon: <RiLightbulbFill />,
            title: "Continuous Innovation",
            description: "At Sanguine Life, we embrace technological advancements and nurture a mindset of continuous learning, pushing boundaries in recruitment solutions."
        },
        {
            icon: <RiRocketFill />,
            title: "Growth-Focused Environment",
            description: "We create opportunities for personal and professional development, ensuring every team member can build a meaningful career while making an impact."
        },
        {
            icon: <RiUserSmileFill />,
            title: "People-First Approach",
            description: "Our culture centers around respect, integrity, and creating a positive work environment where everyone feels valued and empowered to succeed."
        }
    ];

    const workLifeHighlights = [

        {
            image: "/images/SanguineLifeImages/2.jpeg",
            title: "Team Building",
            description: "Regular team activities and events that strengthen bonds and create lasting memories"
        },
        {
            image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/IMG-20220120-WA0036.jpg",
            title: "Celebrating Together",
            description: "Special moments and celebrations that make every team member feel valued and appreciated"
        },
        {
            image: "/images/SanguineLifeImages/3.jpeg",
            title: "Professional Development",
            description: "Continuous learning opportunities, workshops, and skill enhancement programs"
        },
        {
            image: "/images/SanguineLifeImages/5.jpeg",
            title: "Modern Workspace",
            description: "State-of-the-art office designed for comfort, productivity, and collaboration"
        },
        {
            image: "/images/SanguineLifeImages/4.jpeg",
            title: "Flexible Work Culture",
            description: "Hybrid work options and flexible schedules that support work-life balance"
        },

    ];

    return (
        <div className="sanguine-life-container">
            {/* Hero Section */}
            <div className="sanguine-life-hero">
                <div className="hero-overlay"></div>
                <div
                    className="hero-background"
                    style={{
                        backgroundImage: "url('/images/SanguineLifeImages/1.jpeg')",
                        transform: `scale(${getParallaxScale()})`,
                        transition: 'transform 0.1s ease-out'
                    }}
                    ref={parallaxRef}
                ></div>
                <div className="hero-content">
                    <div className="container">
                        <div className="hero-text" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1500">
                            {/* <div className="TaglineWithIcon">
                                <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="" />
                                <h2 className="h2-gradient text-center">Life at Sanguine</h2>
                            </div>
                            <h1 className="text-center">Where Passion Meets Purpose in Every Project</h1>
                            <p>Experience a workplace that goes beyond traditional boundaries. At Sanguine Life, we cultivate an environment where innovation thrives, relationships flourish, and every team member is empowered to reach their full potential.</p> */}
                            {/* <div className="hero-buttons">
                                <AnimatedBtn
                                    text="Join Our Team"
                                    hoverText="Start Your Journey"
                                    icon={<RiUserSmileFill />}
                                />
                            </div> */}
                            <div className="Common-header">
                                <div className="TaglineWithIcon" data-aos="blur-to-clear" data-aos-delay="100">
                                    <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="" />
                                    <h2 className="text-center h2-gradient">Life at Sanguine</h2>
                                </div>
                                <h1 className="text-center white" data-aos="blur-to-clear" data-aos-delay="200">
                                    Where Passion Meets Purpose in Every Project
                                </h1>
                                <p className="text-center white" data-aos="blur-to-clear" data-aos-delay="300">
                                    Experience a workplace that goes beyond traditional boundaries. At Sanguine Life, we cultivate an environment where innovation thrives, relationships flourish, and every team member is empowered to reach their full potential.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Company Culture Section */}
            <div className="culture-section paddingSection">
                <div className="container">
                    <div className="Common-header">
                        <div className="TaglineWithIcon" data-aos="blur-to-clear" data-aos-delay="100">
                            <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="" />
                            <h2 className="text-center h2-gradient">Our Culture</h2>
                        </div>
                        <h1 className="text-center" data-aos="blur-to-clear" data-aos-delay="200">
                            Building a <span className="black">Community</span> of <span className="black">Excellence</span>
                        </h1>
                        <p className="text-center" data-aos="blur-to-clear" data-aos-delay="300">
                            At Sanguine Recruitment, we believe that our people are our greatest asset. We foster a culture of <span className="black">continuous learning</span>, <span className="black">innovation</span>, and <span className="black">mutual respect</span> where every team member can thrive and contribute to our shared success.
                        </p>
                    </div>

                    <div className="culture-grid margin-100">
                        {cultureValues.map((value, index) => (
                            <div
                                key={index}
                                className="culture-card"
                                data-aos="blur-to-clear"
                                data-aos-delay={100 + (index * 100)}
                                data-aos-duration="1200"
                            >
                                <div className="culture-icon">
                                    {value.icon}
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Work Life Gallery Section */}
            <div className="work-life-section paddingSection">
                <div className="container">
                    <div className="Common-header">
                        <div className="TaglineWithIcon" data-aos="blur-to-clear" data-aos-delay="100">
                            <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="" />
                            <h2 className="text-center h2-gradient">Work Life Experience</h2>
                        </div>
                        <h1 className="text-center" data-aos="blur-to-clear" data-aos-delay="200">
                            More Than Just a Workplace
                        </h1>
                        <p className="text-center" data-aos="blur-to-clear" data-aos-delay="300">
                            Discover what makes Sanguine Life special - from our modern workspace to team activities that create lasting bonds and professional growth opportunities.
                        </p>
                    </div>

                    <div className="work-life-grid margin-100">
                        <Row gutter={[30, 30]}>
                            {workLifeHighlights.map((highlight, index) => (
                                <Col
                                    lg={index < 3 ? 8 : 12}
                                    md={index < 3 ? 8 : 12}
                                    sm={24}
                                    xs={24}
                                    key={index}
                                >
                                    <div
                                        className="work-life-card"
                                        data-aos="blur-to-clear"
                                        data-aos-delay={100 + (index * 150)}
                                        data-aos-duration="1200"
                                    >
                                        <div className="work-life-image">
                                            <img src={highlight.image} alt={highlight.title} />
                                            <div className="image-overlay">
                                                <div className="overlay-content">
                                                    <h3>{highlight.title}</h3>
                                                    <p>{highlight.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>

            {/* Team Environment Section */}
            <div className="team-environment-section" style={{ backgroundColor: 'var(--primary-color)' }}>
                <div className="paddingSection">
                    <div className="container">
                        <Row gutter={[40, 40]} align="middle">
                            <Col lg={12} md={24} sm={24} xs={24}>
                                <div className="environment-content" data-aos="blur-to-clear" data-aos-delay="200">
                                    {/* <div className="TaglineWithIcon">
                                        <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="" />
                                        <h2 className="h2-gradient-white">Team Environment</h2>
                                    </div>
                                    <h1 style={{ color: 'white' }}>
                                        Where <span style={{ color: '#ffffff' }}>Innovation</span> Meets <span style={{ color: '#ffffff' }}>Collaboration</span>
                                    </h1>
                                    <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                        Our leadership team drives innovation and inspires our people to deliver solutions that consistently exceed expectations. We embrace technological advancements while nurturing a culture of continuous learning and strategic thinking.
                                    </p>
                                    <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                        With over a decade of industry expertise, our collaborative environment ensures every team member can contribute meaningfully to our client's success while building a rewarding career.
                                    </p> */}
                                    <div className="Common-header" style={{ alignItems: "unset" }}>
                                        <div className="TaglineWithIcon" data-aos="blur-to-clear" data-aos-delay="100">
                                            <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="" />
                                            <h2 className="h2-gradient">Team Environment</h2>
                                        </div>
                                        <h1 className="white" data-aos="blur-to-clear" data-aos-delay="200">
                                        Where Innovation Meets Collaboration
                                        </h1>
                                        <p className="white" data-aos="blur-to-clear" data-aos-delay="300">
                                        Our leadership team drives innovation and inspires our people to deliver solutions that consistently exceed expectations. We embrace technological advancements while nurturing a culture of continuous learning and strategic thinking.
                                        </p>
                                        <p className="white" data-aos="blur-to-clear" data-aos-delay="300">With over a decade of industry expertise, our collaborative environment ensures every team member can contribute meaningfully to our client's success while building a rewarding career.</p>
                                    </div>
                                    {/* <div style={{ marginTop: '30px' }}>
                                        <AnimatedBtn
                                            text="Explore Opportunities"
                                            hoverText="Join Our Mission"
                                            icon={<RiRocketFill />}
                                        />
                                    </div> */}
                                </div>
                            </Col>
                            <Col lg={12} md={24} sm={24} xs={24}>
                                <div className="environment-image" data-aos="blur-to-clear" data-aos-delay="400">
                                    <img src="/images/SanguineLifeImages/6.jpeg" alt="Team Environment" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

            {/* Growth & Benefits Section */}
            <div className="growth-section paddingSection">
                <div className="container">
                    <div className="Common-header">
                        <div className="TaglineWithIcon" data-aos="blur-to-clear" data-aos-delay="100">
                            <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="" />
                            <h2 className=" h2-gradient">Growth & Benefits</h2>
                        </div>
                        <h1 className="" data-aos="blur-to-clear" data-aos-delay="200">
                            Invest in Your <span className="black">Future</span> with Us
                        </h1>
                        <p className=" text-center" data-aos="blur-to-clear" data-aos-delay="300">
                            We're committed to your professional development and well-being. Discover the comprehensive benefits and growth opportunities that make Sanguine Life the ideal place to build your career.
                        </p>
                    </div>

                    <div className="benefits-container margin-100">
                        <Row gutter={[40, 40]}>
                            <Col lg={8} md={12} sm={24} xs={24}>
                                <div className="benefit-card" data-aos="blur-to-clear" data-aos-delay="100">
                                    <div className="benefit-icon">
                                        <RiLightbulbFill />
                                    </div>
                                    <h3>Learning & Development</h3>
                                    <ul>
                                        <li>Continuous skill enhancement programs</li>
                                        <li>Industry workshops and training</li>
                                        <li>Professional certification support</li>
                                        <li>Mentorship programs</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={8} md={12} sm={24} xs={24}>
                                <div className="benefit-card" data-aos="blur-to-clear" data-aos-delay="200">
                                    <div className="benefit-icon">
                                        <RiUserSmileFill />
                                    </div>
                                    <h3>Work-Life Balance</h3>
                                    <ul>
                                        <li>Flexible work arrangements</li>
                                        <li>Hybrid and remote options</li>
                                        <li>Comprehensive health benefits</li>
                                        <li>Paid time off and holidays</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={8} md={12} sm={24} xs={24}>
                                <div className="benefit-card" data-aos="blur-to-clear" data-aos-delay="300">
                                    <div className="benefit-icon">
                                        <RiTeamFill />
                                    </div>
                                    <h3>Career Growth</h3>
                                    <ul>
                                        <li>Clear advancement pathways</li>
                                        <li>Leadership development opportunities</li>
                                        <li>Cross-functional project exposure</li>
                                        <li>Performance-based recognition</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SanguineLife;