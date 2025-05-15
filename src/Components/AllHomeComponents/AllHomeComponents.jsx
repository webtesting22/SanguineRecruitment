import React from "react";
import HeroHome from "./HeroHome/HeroHome";
import AboutServicesCards from "./AboutServicesCards/AboutServicesCards";
import OurServices from "./OurServices/OurServices";
import Testimonials from "./Testimonials/Testimonials";
import ContactCommonSection from "../CommonUsedComponents/ContactCommonBar/ContactCommonSection";
const AllHomeComponents = () => {
    return (
        <div>
            <HeroHome />
            <AboutServicesCards />
            <OurServices />
            <Testimonials />
            <ContactCommonSection/>
        </div>
    )
}
export default AllHomeComponents;