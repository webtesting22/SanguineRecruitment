import React from "react";
import "./WhatsappButton.css";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "919999999999"; // Replace with your number
const WHATSAPP_MESSAGE = "Hello! I would like to know more about your services.";

const WhatsappButton = () => (
    <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        className="whatsapp-float-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
    >
        <span className="whatsapp-pulse"></span>
        <span className="whatsapp-icon whatsapp-icon-bg">
            <FaWhatsapp size={30} color="#fff" />
        </span>
    </a>
);

export default WhatsappButton;