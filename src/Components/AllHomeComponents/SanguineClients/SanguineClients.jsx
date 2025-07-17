import React, { useState, useEffect } from 'react';
import { Row, Col, Tooltip } from 'antd';
import './sanguineClients.css';
import clientData from './ClientData';

const SanguineClients = () => {
    // Duplicate clients array to create seamless loop
    const duplicatedClients = [...clientData, ...clientData, ...clientData];

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