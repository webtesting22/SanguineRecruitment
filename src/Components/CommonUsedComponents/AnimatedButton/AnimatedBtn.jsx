import React from "react";
import "./AnimatedBtn.css";

/**
 * AnimatedBtn Component
 * @param {Object} props
 * @param {string} props.text - Primary text for the button
 * @param {string} [props.hoverText] - Text to show on hover (optional)
 * @param {React.ReactNode} [props.icon] - Icon component (optional)
 * @param {'consultation' | 'explore'} [props.variant='consultation'] - Button variant
 * @param {Function} [props.onClick] - Click handler function
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.disabled] - Disabled state
 */
export const AnimatedBtn = ({
    text,
    hoverText,
    icon,
    variant = "consultation",
    onClick,
    className = "",
    disabled = false,
}) => {
    return (
        <button
            className={`slide-btn ${variant} ${className} ${disabled ? 'disabled' : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            <div className="btn-content-wrapper">
                <div className="btn-text-slide">
                    <span className="text-primary">{text}</span>
                    <span className="text-secondary">{hoverText || text}</span>
                </div>
                {icon && <span className="btn-icon">{icon}</span>}
            </div>
        </button>
    );
};

/**
 * ButtonGroup Component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button components
 * @param {string} [props.className] - Additional CSS classes
 */
export const ButtonGroup = ({ children, className = "" }) => {
    return (
        <div className={`button-group ${className}`}  data-aos="fade-up"
        data-aos-duration="1500" data-aos-delay="300">
            {children}
        </div>
    );
};

export default AnimatedBtn;