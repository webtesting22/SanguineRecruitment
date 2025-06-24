import React, { useState, useEffect } from "react";
import "./Career.css"
import { Tag, Row, Col } from "antd";
import TopPartCommon from "../CommonUsedComponents/TopBarContainer/TopPartCommon";
import Positions from "./Positions/Positions";
import { IoMdDoneAll } from "react-icons/io";

const Career = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedPositionTitle, setSelectedPositionTitle] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const showModal = (title) => {
        setSelectedPositionTitle(title);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedPositionTitle("");
    };

    const ListPoints = [
        {
            title: "Comprehensive Benefits Package",
            content: "Including health insurance, retirement plans, and paid time off"
        },
        {
            title: "Flexible Work Options",
            content: "Hybrid and remote work opportunities to fit your lifestyle"
        },
        {
            title: "A Culture of Innovation",
            content: "Collaborate with passionate professionals dedicated to pushing boundaries"
        }
    ]


    return (
        <>
            <div id="CareerContainer">
                <div  data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1500" data-aos-easing="ease-out">
                <TopPartCommon
    tag="Careers"
    title="Join Our Team"
    highlight="Grow With Sanguine"
    subtitle="At Sanguine Recruitment, we value passion, purpose, and potential. Explore career opportunities where you can thrive, innovate, and make a meaningful impact every day."
/>

                </div>
               
            </div>
            <Positions />
        </>
    )
}
export default Career