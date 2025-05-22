import React, { useState } from 'react';
import { Input, Button, message } from 'antd'; // ✅ import message
import { MdEmail, MdLock, MdVisibilityOff, MdArrowForward } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const PortalLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const storedEmail = "admin@example.com";
        const storedPassword = "000000";

        if (email === storedEmail && password === storedPassword) {
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            message.success("Login successful!");
            navigate('/dashboard');
        } else {
            message.error("Invalid email or password");
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-card">
                <div className="icon-wrapper">
                    <MdArrowForward size={24} />
                </div>

                <h1 className="signin-title">Sign in with email</h1>
                <p className="signin-subtitle">
                    Make a new doc to bring your words, data,<br />
                    and teams together. For free
                </p>

                <Input
                    prefix={<MdEmail style={{ color: "#004675" }} />}
                    placeholder="Email"
                    size="large"
                    className="signin-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input.Password
                    prefix={<MdLock style={{ color: "#004675" }} />}
                    placeholder="Password"
                    size="large"
                    className="signin-input"
                    iconRender={() => <MdVisibilityOff style={{ color: "#004675" }} />}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* <div className="forgot-password">
                    <a href="#" className="forgot-link">Forgot password?</a>
                </div> */}

                <Button
                    type="primary"
                    size="large"
                    className="signin-button"
                    block
                    onClick={handleLogin}
                >
                    Get Started
                </Button>
            </div>
        </div>
    );
};

export default PortalLogin;
