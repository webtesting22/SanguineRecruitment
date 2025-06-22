import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1 className="not-found-title">
                    <span className="gradient-text">404</span>
                </h1>
                <h2 className="not-found-heading">Page not found</h2>
                <p className="not-found-text">
                    Looks like you've taken a wrong turn. The page you're looking for
                    doesn't exist — or maybe it moved while we weren't looking.
                </p>
                <Link to="/" className="not-found-button">
                    Visit homepage
                </Link>
            </div>
            <div className="not-found-background-shape"></div>
        </div>
    );
};

export default NotFound;