import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { CheckCircle, XCircle } from "lucide-react";
import "./Cookies.css";

const Cookies = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isSliding, setIsSliding] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const cookiesAccepted = localStorage.getItem("cookiesAccepted");
        
        if (cookiesAccepted === null) {
            // Show cookie bar after 10 seconds only if user hasn't made a choice
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 6000);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        setIsSliding(true);
        setTimeout(() => {
            setIsVisible(false);
            setIsSliding(false);
            // Store user preference in localStorage
            localStorage.setItem("cookiesAccepted", "true");
            localStorage.setItem("cookiesTimestamp", new Date().toISOString());
        }, 1000); // Match the CSS transition duration (1s)
    };

    const handleReject = () => {
        setIsSliding(true);
        setTimeout(() => {
            setIsVisible(false);
            setIsSliding(false);
            // Store user preference in localStorage
            localStorage.setItem("cookiesAccepted", "false");
            localStorage.setItem("cookiesTimestamp", new Date().toISOString());
        }, 1000); // Match the CSS transition duration (1s)
    };

    // Don't render if user has already made a choice or if not visible
    if (!isVisible) {
        return null;
    }

    return (
        <div className={`cookie-bar ${isSliding ? 'slide-down' : ''}`}>
            <div className="cookie-content">
                <div className="cookie-text">
                    <h4>🍪 We use cookies</h4>
                    <p>
                        We use cookies to enhance your browsing experience, serve personalized 
                        content, and analyze our traffic. By clicking "Accept", you consent 
                        to our use of cookies.
                    </p>
                </div>
                <div className="cookie-actions">
                    <Button 
                        type="default" 
                        onClick={handleReject}
                        className="reject-btn"
                        icon={<XCircle size={16} />}
                    >
                        Reject
                    </Button>
                    <Button 
                        type="primary" 
                        onClick={handleAccept}
                        className="accept-btn"
                        icon={<CheckCircle size={16} />}
                    >
                        Accept
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Cookies;
