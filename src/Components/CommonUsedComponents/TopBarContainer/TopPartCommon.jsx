import React from "react";
import "./TopPartCommon.css"
import { Tag } from "antd";
const TopPartCommon = ({ tag, title, highlight, subtitle }) => {
    return (
        <>
            <div id="TopPartCommonContainer">
                <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/1035mWPLp6zXWlooG2Lz/678647f276cc20015e38cae1_Background pattern.png" alt="" loading="lazy" className="BackgrounCheckPatterImage" />
                <div className="TopPartContentContainer">
                    <div>
                        {tag && <Tag data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">{tag}</Tag>}
                        <h2 className="big-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                            {title} <span className="span-title">{highlight}</span>
                        </h2>
                        {subtitle && <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">{subtitle}</p>}
                    </div>
                </div>
            </div>
        </>
    )
}
export default TopPartCommon
