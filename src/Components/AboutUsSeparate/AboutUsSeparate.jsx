import React, { useState, useRef, useEffect } from "react";
import TopPartCommon from "../CommonUsedComponents/TopBarContainer/TopPartCommon";
import "./AboutUsSeparateContainer.css"
import { Row, Col, Tag } from "antd";
import AnimatedBtn from "../CommonUsedComponents/AnimatedButton/AnimatedBtn";
import { RiUserSmileFill } from "react-icons/ri";
import AnimatedCounter from "../CommonUsedComponents/AnimatedCounter/AnimatedCounter";
import { Play, Pause } from 'lucide-react';
import OurTeam from "../OurTeam/OurTeam";
import Blogs from "../Blogs/Blogs";
import SanguineClients from "../AllHomeComponents/SanguineClients/SanguineClients";
import Services from "../Services/Services";

const AboutUsSeparate = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const videoRef = useRef(null);
    const timerRef = useRef(null);
    const parallaxRef = useRef(null);

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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
        }, 2000); // 2 seconds

        return () => clearInterval(interval);
    }, []);

    // Calculate parallax scale
    const getParallaxScale = () => {
        if (!parallaxRef.current) return 1;

        const rect = parallaxRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;

        // Calculate how much the element is visible
        const visiblePercentage = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)));

        // Scale from 1 to 1.3 based on scroll position
        return 1 + (visiblePercentage * 0.1);
    };

    // Toggle play/pause
    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Handle mouse enter
    const handleMouseEnter = () => {
        setIsHovering(true);
        clearTimeout(timerRef.current);
    };

    // Handle mouse leave
    const handleMouseLeave = () => {
        if (isPlaying) {
            timerRef.current = setTimeout(() => {
                setIsHovering(false);
            }, 2000);
        } else {
            setIsHovering(true);
        }
    };

    // Clean up timeout on unmount
    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    return (
        <>
            <div id="AboutUsSeparateContainer">
                <div className="AboutUsSeparateContentContainer" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1500" data-aos-easing="ease-out">
                    <div style={{ width: "100%" }}>
                        <TopPartCommon
                            title="About Us"
                            highlight="Creating the marketing that drives the startup ecosystem."
                            subtitle="Creating marketing that drives the startup ecosystem requires a strategic blend of storytelling, digital engagement, and community building."
                        />
                    </div>

                </div>
                <div
                    className="margin-100 ParallaxImage"
                    style={{
                        overflow: 'hidden'
                    }}
                >
                    <img
                        src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68088cd9861c02a0f55415fc_senior-manager-is-sitting-boardroom-with-multiracial-colleagues-discussing-project.avif"
                        alt=""
                        ref={parallaxRef}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transform: `scale(${getParallaxScale()})`,
                            transition: 'transform 0.1s ease-out'
                        }}
                    />
                </div>
            </div>
            <div data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1200" data-aos-easing="ease-out">
                <SanguineClients />
            </div>
            <div className="AboutInfoContainer">
                <div className="paddingSection">
                    <div className="container">
                        <div className="Common-header">
                            <div className="TaglineWithIcon" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1200" data-aos-easing="ease-out">
                                <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="" />
                                <h2 className="text-center h2-gradient">About Brand</h2>
                            </div>
                            <h1 className="text-center" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1500" data-aos-easing="ease-out">
                                We are a team of <span className="black">experienced marketers</span> who are passionate about helping <span className="black">startups grow</span>.
                            </h1>
                            <p className="text-center" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1500" data-aos-easing="ease-out">
                                At <span className="black">Sanguine Recruitment</span>, we believe recruitment is more than just filling vacancies — it's about building <span className="black">meaningful, long-lasting partnerships</span> between businesses and <span className="black">exceptional talent</span>. Our process starts with truly understanding your unique <span className="black">business objectives</span>, <span className="black">work culture</span>, and <span className="black">future goals</span>. This enables us to deliver <span className="black">talent solutions</span> that align not only with your skill requirements but also your <span className="black">company ethos</span>.
                            </p>
                            <p className="text-center" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1500" data-aos-easing="ease-out">With <span className="black">deep industry knowledge</span>, an <span className="black">extensive talent network</span>, and <span className="black">modern recruitment strategies</span>, we streamline hiring and ensure you spend less time screening and more time <span className="black">growing your business</span>. Whether you're scaling a startup or strengthening an enterprise team, we're committed to making every placement count.</p>
                            <p className="text-center" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1500" data-aos-easing="ease-out">Our goal goes beyond <span className="black">short-term hiring</span>. We work closely with our clients to develop strong <span className="black">employer brands</span> and <span className="black">sustainable talent pipelines</span> that support <span className="black">long-term growth</span> and <span className="black">organizational success</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1200" data-aos-easing="ease-out">
                <Services />
            </div>
        </>
    )
}
export default AboutUsSeparate