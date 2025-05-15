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
const AboutUsSeparate = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const videoRef = useRef(null);
    const timerRef = useRef(null);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
        }, 2000); // 2 seconds

        return () => clearInterval(interval);
    }, []);

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
                <div className="AboutUsSeparateContentContainer">
                    <div style={{ width: "100%" }}>
                        <TopPartCommon
                            tag="About Us"
                            title="You're in good"
                            highlight="company."
                            subtitle="You don't have to trust our word"
                        />
                    </div>
                    <div className="AboutUsSeparateGridContainer">
                        <div className="hero-home-content">
                            <div>
                                <Row>
                                    <Col lg={12} md={24}>
                                        <div>
                                            <div>
                                                <div>
                                                    <Tag>About us</Tag>
                                                    <h2 className="big-title">Recognized excellence in
                                                        <span className="span-title"> recruitment services</span>
                                                    </h2>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error nostrum quo earum, doloremque aliquam? Dicta alias sit nostrum perferendis. Repellendus similique neque magni dolorem praesentium aspernatur ut atque voluptatibus!</p>
                                                    <div>
                                                        <AnimatedBtn
                                                            text="Free consultation"
                                                            hoverText="Free consultation"
                                                            icon={<RiUserSmileFill />}
                                                            variant="consultation"
                                                            onClick={() => console.log('clicked')}
                                                        />
                                                    </div>
                                                </div>
                                                <section className="counters">
                                                    <Row>
                                                        <Col lg={12}>
                                                            <AnimatedCounter number="$65.3M" suffix="+" label="Helloo text text" />
                                                        </Col>
                                                        <Col lg={12}>
                                                            <AnimatedCounter number="$65.3M" suffix="+" label="Helloo text text" />
                                                        </Col>
                                                    </Row>
                                                </section>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={12} md={24}>
                                        <div>
                                            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div className="AboutVideoPallateContainer">
                        <div style={{ width: "100%" }}>
                            <div className="hero-home-content">
                                <Row>
                                    <Col lg={16}>

                                        <div className="VideoContaienr">
                                            <div className="VideoPlace">
                                                <div
                                                    className="video-wrapper"
                                                    onMouseEnter={handleMouseEnter}
                                                    onMouseLeave={handleMouseLeave}
                                                >
                                                    <video
                                                        ref={videoRef}
                                                        src="https://videos.pexels.com/video-files/5438934/5438934-uhd_2560_1440_25fps.mp4"
                                                        className="video"
                                                        loop
                                                        muted
                                                        preload="auto" // Preload video for smoother experience
                                                        autoPlay={false} // Will not autoplay unless clicked
                                                        onClick={togglePlay}
                                                    />

                                                    {/* Center play/pause button with animation */}
                                                    <button
                                                        className={`center-play-button ${(isPlaying && !isHovering) ? 'hide' : ''}`}
                                                        onClick={togglePlay}
                                                    >
                                                        {isPlaying ?
                                                            <Pause size={24} color="#007A33" /> :
                                                            <Play size={24} color="#007A33" />
                                                        }
                                                    </button>

                                                    {/* Hover controls overlay */}
                                                    <div
                                                        className={`controls-overlay ${isHovering ? 'show' : ''}`}
                                                    >
                                                        <button
                                                            className="control-button"
                                                            onClick={togglePlay}
                                                        >
                                                            {isPlaying ?
                                                                <Pause size={18} color="white" /> :
                                                                <Play size={18} color="white" />
                                                            }
                                                        </button>
                                                        <div className="status-text">
                                                            {isPlaying ? 'Now playing' : 'Paused'}
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </Col>
                                    <Col lg={8}>
                                        <div className="hero-home-content">
                                            <Row>
                                                <Col lg={24}>
                                                    <div className="FirstContainerAdjust">
                                                        <div>
                                                            <h2 className="big-title" style={{ color: "white" }}>Lorem ipsum dolor sit <span className="span-title" style={{ color: "white" }}>Ipsum, distinctio?</span></h2>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={24}>
                                                    <div>
                                                        <div className="CounterNumberAnimationContainer">
                                                            <div>
                                                                <AnimatedCounter number="$65.3M" suffix="+" label="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus!" />
                                                            </div>
                                                            <br />
                                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus!</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <OurTeam/>
                    <Blogs/>
                </div>
            </div>
        </>
    )
}
export default AboutUsSeparate