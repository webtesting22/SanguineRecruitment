import React from 'react';

const iconStyle = {
    width: '50px',
    height: '50px'
};

const accentColor = "#ff524e";
const primaryColor = "#FFFFFF";

// Icon 1: A clipboard for Assessment/Strategy
export const StepOneIcon = () => (
    <svg style={iconStyle} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-icon-1">
        <path d="M41 5H21C19.8954 5 19 5.89543 19 7V57C19 58.1046 19.8954 59 21 59H47C48.1046 59 49 58.1046 49 57V15L41 5Z" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M41 5V15H49" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27 33H41" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27 41H35" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path className="accent-path" d="M29 23C31.25 24.6667 33.6 27 38 23" stroke={accentColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Icon 2: Magnifying glass over people for Sourcing
export const StepTwoIcon = () => (
    <svg style={iconStyle} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-icon-2">
        <circle cx="28" cy="28" r="16" stroke={primaryColor} strokeWidth="3" />
        <path d="M40 40L50 50" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" />
        <circle className="accent-path" cx="28" cy="28" r="6" stroke={accentColor} strokeWidth="3" />
        <path className="accent-path" d="M28 16V22" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
        <path className="accent-path" d="M28 34V40" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
        <path className="accent-path" d="M34 28H40" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
        <path className="accent-path" d="M16 28H22" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
    </svg>
);

// Icon 3: User profile with checkmark for Screening
export const StepThreeIcon = () => (
    <svg style={iconStyle} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-icon-3">
        <path d="M53 54H11C9.89543 54 9 53.1046 9 52V12C9 10.8954 9.89543 10 11 10H53C54.1046 10 55 10.8954 55 12V52C55 53.1046 54.1046 54 53 54Z" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="23" r="7" stroke={primaryColor} strokeWidth="3" />
        <path d="M40 25H50" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 33H50" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 40C15 35.5817 18.5817 32 23 32H25" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" />
        <path className="accent-path" d="M40 43L44 47L52 39" stroke={accentColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Icon 4: Handshake for Integration/Onboarding
export const StepFourIcon = () => (
    <svg style={iconStyle} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-icon-4">
        <path d="M52 28V16L42 8H16C14.8954 8 14 8.89543 14 10V54C14 55.1046 14.8954 56 16 56H32" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 8V16H52" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path className="accent-path" d="M40 44L54 30" stroke={accentColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path className="accent-path" d="M40 30H54" stroke={accentColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path className="accent-path" d="M40 44V30" stroke={accentColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
); 