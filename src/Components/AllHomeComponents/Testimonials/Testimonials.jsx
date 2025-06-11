import React from "react";
import { Tag } from "antd";
import "./Testimonials.css";

const testimonialsRow1 = [
    {
        name: "ASMITA GAUTAM",
        role: "HR Business Partner",
        Description: "Landmark Group, Dubai",
        quote: "Sanguine Recruitment is a very strong consultant firm including people who are not only extremely talented but absolutely amazing at their work. They are highly efficient in understanding client's requirements and delivering services of very high standards. I had the privilege to work with Sanguine during my tenure in Landmark Group and I have always admired them for the quick responses, strong relationship building skills and qualities of profiles."
    },
    {
        name: "Karthick Ravichandran",
        role: "HR Business Partner",
        Description: "Saint Gobain India Private Limited – Glass Business",
        quote: "Once you drop the requirement to Sanguine, you can feel relaxed and expect the quality at the right time. Sanguine as an organization would be lucky to have Ritu as their leader. She and her team earns my highest recommendation."
    },
    {
        name: "SWATI MAIR",
        role: "HR Business Partner & Talent Acquisition",
        Description: "Zaggle, Hyderabad",
        quote: "Sanguine possesses great technology acumen and client orientation skills and having a great team for recruitment especially in the technology niche hiring. I have greatly enjoyed working with Sanguine, as they have managed several crucial IT roles for us. Their approach is proactive, timely, and thorough, handling increasingly hard-to-fill positions with dedication. It is clear that they care deeply about the candidate experience and ensure that both candidate and employer needs are met."
    }
];

const testimonialsRow2 = [
    {
        name: "SWATI MAIR",
        role: "HR Business Partner & Talent Acquisition",
        Description: "Zaggle, Hyderabad",
        quote: "Sanguine possesses great technology acumen and client orientation skills and having a great team for recruitment especially in the technology niche hiring. I have greatly enjoyed working with Sanguine, as they have managed several crucial IT roles for us. Their approach is proactive, timely, and thorough, handling increasingly hard-to-fill positions with dedication. It is clear that they care deeply about the candidate experience and ensure that both candidate and employer needs are met."
    },
    {
        name: "Karthick Ravichandran",
        role: "HR Business Partner",
        Description: "Saint Gobain India Private Limited – Glass Business",
        quote: "Once you drop the requirement to Sanguine, you can feel relaxed and expect the quality at the right time. Sanguine as an organization would be lucky to have Ritu as their leader. She and her team earns my highest recommendation."
    },
    {
        name: "ASMITA GAUTAM",
        role: "HR Business Partner",
        Description: "Landmark Group, Dubai",
        quote: "Sanguine Recruitment is a very strong consultant firm including people who are not only extremely talented but absolutely amazing at their work. They are highly efficient in understanding client's requirements and delivering services of very high standards. I had the privilege to work with Sanguine during my tenure in Landmark Group and I have always admired them for the quick responses, strong relationship building skills and qualities of profiles."
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

const Testimonials = () => (
    <section className="testimonials-section sidepadding">
        <img
            src="/images/background/testimonials-bg.svg"
            alt=""
            className="testimonials-bg"
            aria-hidden="true"
        />
        <div className="testimonials-container">
            <Tag>Client Feedback</Tag>
            <h2 className="big-title">
                Hear from our <span className="span-title">happy clients.</span>
            </h2>
            <p className="testimonials-subtitle">
                Don't just take our word for it—our clients say it all.
            </p>
            
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
                <div className="testimonials-row slide-right-to-left">
                    <div className="testimonials-track">
                        {[...testimonialsRow2, ...testimonialsRow2].map((testimonial, index) => (
                            <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Testimonials;