import React from "react";
import { Row, Col, Tag } from "antd";
import { BlogsData } from "./BlogsData";
import "./Blogs.css"
const Blogs = () => {

    return (
        <>
            <div id="BlogsContainer">
                <div className="BlogContentContainer hero-home-content marginTop">
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
                                    <Col key={index} lg={index === 0 ? 12 : 6}>
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
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blogs