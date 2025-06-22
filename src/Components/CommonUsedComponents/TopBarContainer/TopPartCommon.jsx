import React from "react";
import "./TopPartCommon.css"
import { Tag } from "antd";
const TopPartCommon = ({ tag, title, highlight, subtitle }) => {
    return (
        <>
            <div className="Common-header margin-top-140px">
                {/* <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/1035mWPLp6zXWlooG2Lz/678647f276cc20015e38cae1_Background pattern.png" alt="" loading="lazy" className="BackgrounCheckPatterImage" /> */}
                <div className="TaglineWithIcon">
                    <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="" />
                    <h2 className="text-center h2-gradient">{title}</h2>
                </div>
                <h1 className="text-center">{highlight}</h1>
                <p className="text-center">{subtitle}</p>
            </div>
        </>
    )

}
export default TopPartCommon
