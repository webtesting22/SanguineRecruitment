import React from "react";
import HeroHome from "./HeroHome/HeroHome";
import AboutServicesCards from "./AboutServicesCards/AboutServicesCards";
import OurServices from "./OurServices/OurServices";
import Testimonials from "./Testimonials/Testimonials";
import ContactCommonSection from "../CommonUsedComponents/ContactCommonBar/ContactCommonSection";
import SanguineClients from "./SanguineClients/SanguineClients";
const AllHomeComponents = () => {
    return (
        <div>
            <HeroHome />
            <AboutServicesCards />
            <SanguineClients/>
            <OurServices />
       
            {/* <SanguineClients /> */}
            <Testimonials />
            {/* <ContactCommonSection /> */}
            {/* <ContactCommonSection/> */}
        </div>
    )
}
export default AllHomeComponents;