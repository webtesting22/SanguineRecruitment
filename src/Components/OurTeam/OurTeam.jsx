import React from "react";
import "./OurTeam.css";

const teamMembers = [
    // {
    //     name: "Priya Bhatt",
    //     role: "Owner",
    //     image: "https://randomuser.me/api/portraits/women/68.jpg",
    //     highlight: false,
    //     color: "#008060"
    // },
    // {
    //     name: "Kiran Saxena",
    //     role: "Founder",
    //     image: "https://randomuser.me/api/portraits/women/65.jpg",
    //     highlight: true,
    //     color: "#008060"
    // },
    // {
    //     name: "Rajesh Dixit",
    //     role: "HR",
    //     image: "https://randomuser.me/api/portraits/men/75.jpg",
    //     highlight: false,
    //     color: "#008060"
    // },
    // {
    //     name: "Rohit Sharma",
    //     role: "Project Manager",
    //     image: "https://randomuser.me/api/portraits/men/32.jpg",
    //     highlight: false,
    //     color: "#008060"
    // },
    // {
    //     name: "Manish Malhotra",
    //     role: "Developer",
    //     image: "https://randomuser.me/api/portraits/men/41.jpg",
    //     highlight: false,
    //     color: "#008060"
    // },
    // {
    //     name: "Vikram Reddy",
    //     role: "Marketing Manager",
    //     image: "https://randomuser.me/api/portraits/men/51.jpg",
    //     highlight: false,
    //     color: "#008060"
    // }
    {
        name: "GAURAV VIJAY",
        role: "Director & Founder",
        Educations: "MBA - BIMM, Pune",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        highlight: false,
        color: "#1A6985"
    },
    {
        name: "RITU VIJAY",
        role: "Director & Co-Founder",
        Educations: "PhD. (Pursuing), MBA-HR, LLB,Psychology Graduate",
        image: "https://randomuser.me/api/portraits/men/51.jpg",
        highlight: false,
        color: "#1A6985"
    }
];

const OurTeam = () => {
    return (
        <section className="our-team-section">
            <div className="our-team-header">
                <h2 className="big-title">The Leaders Behind <span className="span-title">Sanguine Recruitment</span></h2>
                <p>
                    At Sanguine Recruitment Pvt. Ltd, we are dedicated to redefining what's possible in recruitment. By embracing technological advancements and nurturing a culture of continuous learning, our leadership team drives innovation and inspires our people to deliver solutions that consistently exceed client expectations.
                </p>
                
            </div>
            <div className="our-team-grid">
                {teamMembers.map((member, idx) => (
                    <div
                        className="our-team-card"
                        key={member.name}
                    >
                        <div className="our-team-avatar-wrapper">
                            {/* <img src={member.image} alt={member.name} className="our-team-avatar" /> */}
                        </div>
                        <div className="our-team-info">
                            <div className="our-team-name">{member.name}</div>
                            <div className="our-team-role" style={{ color: member.color }}>{member.role}</div>
                            <br />
                            <div className="our-team-educations">{member.Educations}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="our-team-header">
            <p>
                    With over a decade of industry expertise, our leaders bring invaluable insight and strategic direction to every project. Their proven ability to tackle complex challenges ensures we remain at the forefront of industry trends, delivering tailored and effective solutions for our clients.
                </p>
            </div>
            
        </section>
    );
};

export default OurTeam;