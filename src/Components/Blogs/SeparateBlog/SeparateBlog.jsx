import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BlogsData } from "../BlogsData";
import { Row, Col, Card } from "antd";
import TopPartCommon from "../../CommonUsedComponents/TopBarContainer/TopPartCommon";
import "./SeparateBlog.css"
const SeparateBlog = () => {
    const { slug } = useParams();
    const blog = BlogsData.find((item) => item.slug === slug);

    if (!blog) return <p>Blog not found</p>;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const otherBlogs = BlogsData.filter((item) => item.slug !== slug);
    return (
        <>
            <div>
                <TopPartCommon
                    tag={blog.tagline}
                    title={blog.title}
                    highlight="company."
                    subtitle="You don't have to trust our word"
                />
                <div className="hero-home-content">
                    <div>
                        <div className="paddingSection">
                            <img src={blog.blogImg} alt={blog.title} style={{ width: "100%", maxHeight: 500, objectFit: "cover", borderRadius: "20px" }} />
                        </div>
                        <div className="paddingSection" style={{paddingTop:"0px"}}>
                            <Row>
                                <Col lg={16} md={16} style={{width:"100%"}}>
                                    <div className="ExistingBlogContent">
                                        <div>
                                            <p>{blog.content}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={8} md={8} style={{width:"100%"}}>
                                    <div className="StikyContainer">
                                        <div className="OthersBlogShowContainer">
                                            <h2 className="small-title" style={{ color: "black" }}>Related Blogs</h2>
                                            <Row gutter={[16, 16]}>
                                                {otherBlogs.map((item) => (
                                                    <Col span={24} key={item.slug}>
                                                        <div>
                                                            <div className="blogCardsContainer">
                                                                <div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SeparateBlog