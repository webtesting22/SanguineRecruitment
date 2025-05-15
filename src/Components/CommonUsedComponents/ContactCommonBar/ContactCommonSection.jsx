
import React from "react";
import "./ContactCommonContainer.css"
import AnimatedBtn from "../AnimatedButton/AnimatedBtn";
import { RiUserSmileFill } from "react-icons/ri";
const ContactCommonSection = () => {

    const Color = "white"

    return (
        <>
            <div id="ContactCommonSectionContainer">
                <div className="ContactSectionContainer paddingSection">
                    <div className="hero-home-content">
                        <div style={{ textAlign: "center" }} className="WidthSet">
                            <div>
                                <h2 className="big-title" style={{ color: Color }}> Take the first step toward building <span className="span-title" style={{ color: Color }}>your dream team.</span></h2>
                                <p style={{ color: Color }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dignissimos odio vero nulla consequuntur ad, suscipit modi omnis iste quam.</p>
                                <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                                    <AnimatedBtn
                                        text="Free consultation"
                                        hoverText="Free consultation"
                                        icon={<RiUserSmileFill />}
                                    />
                                    <AnimatedBtn
                                        text="Free consultation"
                                        hoverText="Free consultation"
                                        icon={<RiUserSmileFill />}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactCommonSection