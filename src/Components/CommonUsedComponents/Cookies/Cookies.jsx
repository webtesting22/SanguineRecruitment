import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Cookie } from "lucide-react";
import "./Cookies.css";

const Cookies = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cookieChoiceMade = localStorage.getItem("cookie_choice_made");
        if (!cookieChoiceMade) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000); // Show after 2 seconds
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_choice_made", "accepted");
        setIsVisible(false);
    };

    const handleSettings = () => {
        // For now, settings will just dismiss the banner.
        // A full settings modal would be a separate implementation.
        localStorage.setItem("cookie_choice_made", "settings_viewed");
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
        <div className="cookie-banner">
            <div className="cookie-content">
                <Cookie className="cookie-icon" size={24} />
                <p className="cookie-text">
                    We use cookies to enhance your browsing experience. By clicking 'Accept all,' you agree to the use of cookies.
                </p>
            </div>
            <div className="cookie-actions">
                <Button
                    type="primary"
                    onClick={handleAccept}
                    className="cookie-button accept-all-btn"
                >
                    Accept all
                </Button>
                <Button
                    type="default"
                    onClick={handleSettings}
                    className="cookie-button cookie-settings-btn"
                >
                    Cookie Settings
                </Button>
            </div>
        </div>
    </div>
    );
};

export default Cookies;
