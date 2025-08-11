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
                            highlight="Empowering businesses through strategic talent partnerships."
                            subtitle="At Sanguine Recruitment, we go beyond traditional hiring. We align top-tier talent with your business vision by combining deep industry knowledge, personalized strategies, and a people-first approach."
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
                        alt="Senior manager sitting in boardroom with multiracial colleagues discussing recruitment project - Sanguine Recruitment team collaboration"
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
                    <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="Decorative stars icon" />
                    <h2 className="text-center h2-gradient">About Us</h2>
                </div>
                <h1 className="text-center" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1500" data-aos-easing="ease-out">
                    We are a team of <span className="black">recruitment specialists</span> committed to connecting <span className="black">exceptional talent</span> with visionary businesses.
                </h1>
                <p className="text-center" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1500" data-aos-easing="ease-out">
                    At <span className="black">Sanguine Recruitment</span>, we believe hiring is not just about filling roles — it's about creating <span className="black">strategic partnerships</span> that fuel business success. We start by understanding your <span className="black">goals, culture, and challenges</span> to deliver talent that aligns with both your immediate needs and long-term vision.
                </p>
                <p className="text-center" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1500" data-aos-easing="ease-out">
                    With our <span className="black">deep industry insight</span>, <span className="black">robust talent networks</span>, and <span className="black">modern recruitment practices</span>, we ensure a seamless hiring experience. Whether you're a growing startup or an established enterprise, we help you spend less time filtering and more time building.
                </p>
                <p className="text-center" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1500" data-aos-easing="ease-out">
                    Our mission extends beyond short-term hiring — we work with clients to build <span className="black">powerful employer brands</span> and <span className="black">sustainable talent pipelines</span> that drive <span className="black">long-term growth</span> and <span className="black">organizational excellence</span>.
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