import React from "react";
import HeroHome from "../HeroHome/HeroHome";
import AboutServicesCards from "../AboutServicesCards/AboutServicesCards";
import OurServices from "../OurServices/OurServices";
import Testimonials from "../Testimonials/Testimonials";
import MegaNavigation from "../MegaNavigation/MegaNavigation";
const AllHomeComponents = () => {
    return (
        <div>
            <MegaNavigation/>
            <HeroHome />
            <AboutServicesCards />
            <OurServices />
            <Testimonials />
        </div>
    )
}
export default AllHomeComponents;