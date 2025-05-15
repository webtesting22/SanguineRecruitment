import React from "react";
import { Row, Col, Tag } from "antd";
import { BlogsData } from "./BlogsData";
import { useNavigate } from "react-router-dom";
import "./Blogs.css"
import ContactCommonSection from "../CommonUsedComponents/ContactCommonBar/ContactCommonSection";
const Blogs = () => {
    const navigate = useNavigate();
    return (
        <>
            <div id="BlogsContainer">
                <div className="BlogContentContainer hero-home-content paddingSection">
                    <div>
                        <div>
                            <Tag>Blogs</Tag>
                            <h2 className="big-title">Recognized excellence in
                                <span className="span-title"> recruitment services</span>
                            </h2>
                        </div>
                        <div>
                            <Row gutter={[16, 16]}>
                                {BlogsData.map((item, index) => (
                                    <Col key={item.title} lg={index === 0 ? 12 : 6} onClick={() => navigate(`/blogs/${item.slug}`)}>
                                        <div className="BlogsContainerCard">
                                            <div>
                                                <div className="blogImageContainer">
                                                    <img
                                                        src={item.blogImg}
                                                        alt="Blog"
                                                        style={{ width: "100%" }}
                                                    />
                                                </div>
                                                <div className="BlogDescriptionContainer">
                                                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, dolores!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>

                        </div>
                        <ContactCommonSection/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blogs