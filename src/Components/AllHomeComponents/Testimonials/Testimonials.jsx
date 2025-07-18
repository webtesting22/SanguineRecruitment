import React, { useEffect } from "react";
import { Tag } from "antd";
import "./Testimonials.css";
import SectionHero from "../../CommonUsedComponents/SectionHero/SectionHero";
const testimonialsRow1 = [
    {
        name: "ASMITA GAUTAM",
        role: "HR Business Partner",
        Description: "Landmark Group, Dubai",
        quote: "Sanguine Recruitment is a highly competent consulting firm led by an exceptional team of professionals. Their ability to deeply understand client requirements and deliver high-quality talent is truly impressive. During my time at Landmark Group, I had the pleasure of working with them and always appreciated their quick turnarounds, relationship-building skills, and the quality of candidates shared."
    },
    {
        name: "Karthick Ravichandran",
        role: "HR Business Partner",
        Description: "Saint Gobain India Private Limited – Glass Business",
        quote: "Working with Sanguine has always been a stress-free experience. Once a requirement is shared, you can trust them to deliver top-quality profiles on time. Ritu’s leadership stands out — her dedication and the team’s professionalism make Sanguine truly dependable. They have my highest recommendation."
    },
    {
        name: "SWATI MAIR",
        role: "HR Business Partner & Talent Acquisition",
        Description: "Zaggle, Hyderabad",
        quote: "Sanguine Recruitment brings together technical expertise and a strong client-first mindset. Their team has successfully closed several critical IT roles for us with precision and care. I’ve been particularly impressed by their proactive approach, timely communication, and attention to the candidate experience. They’re a valuable partner for any tech hiring needs."
    }
];


const TestimonialCard = ({ testimonial }) => (
    <div className="testimonial-card">
        <div className="testimonial-content">
            <div className="testimonial-user">
                <div>
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-role">{testimonial.role}</div>
                    <div className="testimonial-description">{testimonial.Description}</div>
                </div>
            </div>
            <div className="testimonial-quote">
                "{testimonial.quote}"
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* <SectionHero
                title="Your Trusted Recruitment Partner"
                description="We specialize in connecting exceptional talent with leading organizations. Our expert team delivers personalized recruitment solutions that drive business success."
                primaryBtnText="Find Talent"
                primaryBtnAction={() => {  }}
                secondaryBtnText="Partner With Us"
                secondaryBtnAction={() => {  }}
                imageUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            /> */}
            <section className="testimonials-section sidepadding">
                <img
                    src="/images/background/testimonials-bg.svg"
                    alt=""
                    className="testimonials-bg"
                    aria-hidden="true"
                />
                <div className="Common-header">
                    <div className="TaglineWithIcon">
                        <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="" />
                        <h2 className="text-center h2-gradient">Customer Reviews</h2>
                    </div>
                    <h1 className="text-center">
                        Hear from our happy clients.
                    </h1>

                    <div className="testimonials-slider-container">
                        {/* First row - Left to Right */}
                        <div className="testimonials-row slide-left-to-right">
                            <div className="testimonials-track">
                                {[...testimonialsRow1, ...testimonialsRow1].map((testimonial, index) => (
                                    <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
                                ))}
                            </div>
                        </div>

                        {/* Second row - Right to Left */}
                        {/* <div className="testimonials-row slide-right-to-left">
                            <div className="testimonials-track">
                                {[...testimonialsRow2, ...testimonialsRow2].map((testimonial, index) => (
                                    <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
                                ))}
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;