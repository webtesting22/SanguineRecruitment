import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./AnimatedCounters.css";

const AnimatedCounter = ({ number, suffix = "", duration = 4, label = "" }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    // Convert formatted string like "$65.3M" to number and suffix
    const extractValue = (val) => {
        const num = parseFloat(val.replace(/[^0-9.]/g, ""));
        const suffixMatch = val.match(/[^\d.]+$/); // capture suffix
        return { value: num, suffix: suffix || (suffixMatch ? suffixMatch[0] : "") };
    };

    const { value, suffix: finalSuffix } = extractValue(number);

    return (
        <div className="counter-box" ref={ref}>
            <div className="counter-number">
                {inView && (
                    <CountUp
                        className="big-title"
                        end={value}
                        duration={duration}
                        separator=","
                        decimals={number.includes(".") ? 1 : 0}
                        suffix={finalSuffix}
                    />
                )}
            </div>
            {label && <p className="CounterPara">{label}</p>}
        </div>
    );
};

export default AnimatedCounter;
