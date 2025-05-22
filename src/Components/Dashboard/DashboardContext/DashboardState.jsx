import React, { useState, useEffect } from "react";
import DashboardContext from "./DashboardContext";

const DashboardState = ({ children }) => {
    const [applicationsData, setApplicationsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apibaseUrl = import.meta.env.VITE_BASE_URL;
    // Fetch data on mount
    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await fetch(`https://testapi.prepseed.com/sanguineRecruitment/getCareerApplications`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                // console.log("datatataaaaaaaaaaaa ", data)
                setApplicationsData(data.applications); // Adjust based on your API response structure
                setLoading(false);
            } catch (err) {
                setError(err.message || "Unknown error");
                setLoading(false);
            }
        };

        fetchApplications();
    }, []);

    return (
        <DashboardContext.Provider value={{ applicationsData, loading, error }}>
            {children}
        </DashboardContext.Provider>
    );
};

export default DashboardState;
