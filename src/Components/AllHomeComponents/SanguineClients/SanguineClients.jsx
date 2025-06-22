import React, { useState, useEffect } from 'react';
import { Row, Col, Tooltip } from 'antd';
import './sanguineClients.css';

const SanguineClients = () => {
    const clients = [
        { name: "HomeCenter", logo: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/1.-HC-Logo copy.png', website: 'https://www.homecentre.com' },
        { name: "HomeBox", logo: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/1200x600wa.png', website: 'https://www.homebox.com' },
        { name: "Otis", logo: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/1280px-Otis_logo.SVG.png', website: 'https://www.otis.com' },
        { name: "Shoppers Stop", logo: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/8004f0a520252e1932102003cf85d4d6.jpg', website: 'https://www.shoppersstop.com' },
        { name: "AbdulLatif", logo: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/1631348255051.jpeg', website: 'https://www.abdullatif.com' },
        { name: "LandMark Arabia", logo: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/1480797514939567100-1.jpg', website: 'https://www.landmarkgroup.com' },
        { name: "Centerpoint", logo: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/centerpoint-logo-png_seeklogo-311859.png', website: 'https://www.centerpoint.com' },
        { name: "Cafe Coffee Day", logo: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/cafe-coffee-day.png', website: 'https://www.cafecoffeeday.com' },
        { name: "Burger King", logo: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/burger-king-new-20218389.jpg', website: 'https://www.burgerking.com' },
        { name: "Zaggle", logo: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/images (3).png', website: 'https://www.zaggle.in' },
        { name: "LeadsQuared", logo: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/leadsquaredlogo2x.jpeg', website: 'https://www.leadsquared.com' },
        { name: "Walking Tree", logo: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/images (5).png', website: 'https://www.walkingtree.tech' },
        { name: "Saint-Gobain", logo: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/images (4).png', website: 'https://www.saint-gobain.com' },
        { name: "splash love", logo: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/logo (1).png', website: 'https://www.splashlove.com' },
        { name: "lifestyle", logo: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/lifestyle-logo-png_seeklogo-311862.png', website: 'https://www.lifestylestores.com' },
        { name: "al musbah", logo: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/logo (2).png', website: 'https://www.almusbah.com' },
        { name: "spencers", logo: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/SPENCERS.NS_BIG-9b99c75c.png', website: 'https://www.spencersretail.com' },
        { name: "shoe mart", logo: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Shoe-Mart-3.png', website: 'https://www.shoemart.com' },
        { name: "E max", logo: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Yzi7cTHl.png', website: 'https://www.emax.ae' },
        { name: "carrefour", logo: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/original-0abbbcef53d5e3f30b9b852328ac5bb2 copy.png', website: 'https://www.carrefour.com' },
        { name: "babyshop", logo: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/unnamed (1).png', website: 'https://www.babyshop.com' },
        { name: "hnak", logo: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/unnamed (2).png', website: 'https://www.hnak.com' },
    ];

    // Duplicate clients array to create seamless loop
    const duplicatedClients = [...clients, ...clients, ...clients];

    return (
        <div className="sanguine-clients-component paddingSection">
            <div className="container">
                <div className="Common-header">
                    <div className="TaglineWithIcon">
                        {/* <img src="https://cdn.prod.website-files.com/680534957b5199127f2857e6/68078e632d70dec45f186fc4_stars.svg" alt="" /> */}
                        <h2 className="text-center">Trusted by our customers & partners</h2>
                    </div>
                </div>
                <div className='sanguine-clients-container'>
                    <div className='sanguine-clients-track'>
                        {duplicatedClients.map((client, index) => (
                            <div className='sanguine-client-item' key={index}>
                                <img src={client.logo} alt={client.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SanguineClients;