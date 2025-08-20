import React, { useEffect } from "react";
import TopPartCommon from "./CommonUsedComponents/TopBarContainer/TopPartCommon";
import "./privacyPolicy.css";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <TopPartCommon 
                title="Privacy Policy" 
                description="Your privacy is important to us. Learn how we collect, use, and protect your personal information."
            />
            
            <div className="privacy-policy-container paddingSection">
                <div className="container">
                    <div className="privacy-content">
                        
                        <div className="privacy-meta">
                            <div className="privacy-dates">
                                <span className="effective-date"><strong>Effective Date:</strong> January 1, 2025</span>
                                <span className="last-updated"><strong>Last Updated:</strong> January 1, 2025</span>
                            </div>
                        </div>

                        <section className="privacy-section">
                            <h2 className="section-title">1. Introduction</h2>
                            <p className="section-content">
                                Sanguine Recruitment ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at www.sanguinerecruitment.com ("Website") or use our recruitment services.
                            </p>
                            <p className="section-content">
                                By accessing our Website or using our services, you agree to the collection and use of information in accordance with this Privacy Policy.
                            </p>
                        </section>

                        <section className="privacy-section">
                            <h2 className="section-title">2. About Sanguine Recruitment</h2>
                            <p className="section-content">
                                Sanguine Recruitment is a professional recruitment consulting firm specializing in talent acquisition across various industries including:
                            </p>
                            <ul className="privacy-list">
                                <li>Manufacturing and Engineering</li>
                                <li>Logistics and Supply Chain</li>
                                <li>Fintech and FMCG (Fast Moving Consumer Goods)</li>
                                <li>Technology and IT</li>
                                <li>Retail and Fashion</li>
                                <li>Other specialized sectors</li>
                            </ul>
                            <p className="section-content">
                                We provide strategic hiring solutions, connecting top-tier talent with leading organizations through our comprehensive recruitment services.
                            </p>
                        </section>

                        <section className="privacy-section">
                            <h2 className="section-title">3. Information We Collect</h2>
                            
                            <div className="subsection">
                                <h3 className="subsection-title">3.1 Personal Information You Provide</h3>
                                <p className="section-content">
                                    When you interact with our Website or services, we may collect:
                                </p>
                                
                                <div className="info-category">
                                    <h4 className="category-title">Job Application Information:</h4>
                                    <ul className="privacy-list">
                                        <li>Full name and contact information</li>
                                        <li>Email address and phone number</li>
                                        <li>Current location and willingness to relocate</li>
                                        <li>Resume and portfolio documents</li>
                                        <li>LinkedIn profile and professional URLs</li>
                                        <li>Educational qualifications and certifications</li>
                                        <li>Current job title and employment history</li>
                                        <li>Experience level and key skills</li>
                                        <li>Salary expectations and notice period</li>
                                        <li>Any additional information you choose to provide</li>
                                    </ul>
                                </div>

                                <div className="info-category">
                                    <h4 className="category-title">General Inquiries:</h4>
                                    <ul className="privacy-list">
                                        <li>Contact details when you reach out through our contact forms</li>
                                        <li>Information shared during WhatsApp communications</li>
                                        <li>Feedback and testimonials</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="subsection">
                                <h3 className="subsection-title">3.2 Information Automatically Collected</h3>
                                <p className="section-content">
                                    We automatically collect certain information when you visit our Website:
                                </p>
                                <ul className="privacy-list">
                                    <li>IP address and geographical location</li>
                                    <li>Browser type and version</li>
                                    <li>Device information</li>
                                    <li>Pages visited and time spent</li>
                                    <li>Referring website information</li>
                                    <li>Date and time of visits</li>
                                </ul>
                            </div>

                            <div className="subsection">
                                <h3 className="subsection-title">3.3 Cookies and Tracking Technologies</h3>
                                <p className="section-content">
                                    We use cookies and similar technologies to enhance your browsing experience, remember your preferences, analyze website usage and performance, and provide personalized content.
                                </p>

                                <div className="info-category">
                                    <h4 className="category-title">Types of Cookies We Use:</h4>
                                    <ul className="privacy-list">
                                        <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                                        <li><strong>Preference Cookies:</strong> Remember your settings and choices</li>
                                        <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our Website</li>
                                        <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (if applicable)</li>
                                    </ul>
                                </div>

                                <p className="section-content">
                                    You can manage cookie preferences through your browser settings or our cookie consent banner.
                                </p>
                            </div>
                        </section>

                        <section className="privacy-section">
                            <h2 className="section-title">4. How We Use Your Information</h2>
                            <p className="section-content">
                                We use your personal information for the following purposes:
                            </p>

                            <div className="subsection">
                                <h3 className="subsection-title">4.1 Recruitment Services</h3>
                                <ul className="privacy-list">
                                    <li>Processing job applications and evaluating candidates</li>
                                    <li>Matching candidates with suitable job opportunities using both manual and automated systems</li>
                                    <li>Conducting interviews and assessments</li>
                                    <li>Facilitating communication between candidates and employers</li>
                                    <li>Providing career guidance and consultation</li>
                                    <li>Maintaining candidate databases for future opportunities</li>
                                    <li>Performing background checks and reference verification (with your consent)</li>
                                    <li>Conducting skills assessments and psychometric testing where applicable</li>
                                </ul>
                            </div>

                            <div className="subsection">
                                <h3 className="subsection-title">4.2 Business Operations</h3>
                                <ul className="privacy-list">
                                    <li>Responding to inquiries and providing customer support</li>
                                    <li>Improving our Website and services through analytics and user feedback</li>
                                    <li>Conducting market research and analysis</li>
                                    <li>Complying with legal and regulatory requirements</li>
                                    <li>Protecting against fraud and security threats</li>
                                    <li>Managing our business relationships and client communications</li>
                                    <li>Internal training and quality assurance purposes</li>
                                </ul>
                            </div>

                            <div className="subsection">
                                <h3 className="subsection-title">4.3 Communication</h3>
                                <ul className="privacy-list">
                                    <li>Sending updates about job opportunities via email, phone, SMS, or WhatsApp</li>
                                    <li>Providing recruitment-related information and industry insights</li>
                                    <li>Sharing career advice and professional development resources</li>
                                    <li>Administrative communications about our services</li>
                                    <li>Marketing communications about our services (with your consent)</li>
                                </ul>
                            </div>

                            <div className="subsection">
                                <h3 className="subsection-title">4.4 Automated Decision-Making and Profiling</h3>
                                <p className="section-content">We may use automated systems and algorithms to:</p>
                                <ul className="privacy-list">
                                    <li>Screen and rank candidates for initial job matching</li>
                                    <li>Analyze skills and experience compatibility</li>
                                    <li>Generate candidate recommendations for clients</li>
                                </ul>
                                <p className="section-content important-note">
                                    <strong>Important:</strong> Final hiring decisions are always made by human recruiters and clients, not automated systems.
                                </p>
                            </div>
                        </section>

                        <section className="privacy-section">
                            <h2 className="section-title">5. Information Sharing and Disclosure</h2>

                            <div className="subsection">
                                <h3 className="subsection-title">5.1 With Your Consent</h3>
                                <p className="section-content">We may share your information with:</p>
                                <ul className="privacy-list">
                                    <li><strong>Client Companies:</strong> When you apply for positions, we share relevant information with potential employers</li>
                                    <li><strong>Third-Party Recruiters:</strong> For collaborative recruitment efforts</li>
                                    <li><strong>Background Check Providers:</strong> With your explicit consent for verification purposes</li>
                                </ul>
                            </div>

                            <div className="subsection">
                                <h3 className="subsection-title">5.2 Service Providers</h3>
                                <p className="section-content">We work with trusted third-party service providers who assist us in:</p>
                                <ul className="privacy-list">
                                    <li>Website hosting and maintenance</li>
                                    <li>Data storage and backup</li>
                                    <li>Analytics and performance monitoring</li>
                                    <li>Communication services</li>
                                    <li>Security and fraud prevention</li>
                                </ul>
                            </div>

                            <div className="subsection">
                                <h3 className="subsection-title">5.3 Legal Requirements</h3>
                                <p className="section-content">We may disclose your information when required by law or to:</p>
                                <ul className="privacy-list">
                                    <li>Comply with legal processes or government requests</li>
                                    <li>Protect our rights, property, or safety</li>
                                    <li>Investigate potential violations of our terms</li>
                                    <li>Respond to emergency situations</li>
                                </ul>
                            </div>
                        </section>

                        <section className="privacy-section">
                            <h2 className="section-title">6. Data Security</h2>
                            <p className="section-content">
                                We implement comprehensive technical and organizational security measures to protect your personal information:
                            </p>

                            <div className="subsection">
                                <h3 className="subsection-title">6.1 Technical Safeguards</h3>
                                <ul className="privacy-list">
                                    <li><strong>Encryption:</strong> AES-256 encryption for data at rest and TLS 1.3 for data in transit</li>
                                    <li><strong>Secure Servers:</strong> Cloud infrastructure with enterprise-grade security controls</li>
                                    <li><strong>Access Controls:</strong> Multi-factor authentication and role-based access permissions</li>
                                    <li><strong>Network Security:</strong> Firewalls, intrusion detection, and regular vulnerability assessments</li>
                                    <li><strong>Backup Systems:</strong> Encrypted, geographically distributed backup systems</li>
                                </ul>
                            </div>

                            <div className="subsection">
                                <h3 className="subsection-title">6.2 Organizational Measures</h3>
                                <ul className="privacy-list">
                                    <li><strong>Employee Training:</strong> Regular data protection and cybersecurity training</li>
                                    <li><strong>Access Policies:</strong> Strict need-to-know access with regular access reviews</li>
                                    <li><strong>Incident Response:</strong> 24/7 security monitoring and incident response procedures</li>
                                    <li><strong>Third-Party Audits:</strong> Annual independent security assessments and penetration testing</li>
                                    <li><strong>Compliance Monitoring:</strong> Regular compliance checks and security policy updates</li>
                                </ul>
                            </div>
                        </section>

                        <section className="privacy-section">
                            <h2 className="section-title">7. Your Rights and Choices</h2>
                            <p className="section-content">
                                Depending on your location, you may have the following rights:
                            </p>

                            <div className="rights-grid">
                                <div className="rights-card">
                                    <h4 className="rights-title">Access & Portability</h4>
                                    <ul className="privacy-list">
                                        <li>Request access to your personal information</li>
                                        <li>Obtain a copy of your data in a portable format</li>
                                    </ul>
                                </div>

                                <div className="rights-card">
                                    <h4 className="rights-title">Correction & Updates</h4>
                                    <ul className="privacy-list">
                                        <li>Correct inaccurate or incomplete information</li>
                                        <li>Update your contact details and preferences</li>
                                    </ul>
                                </div>

                                <div className="rights-card">
                                    <h4 className="rights-title">Deletion & Erasure</h4>
                                    <ul className="privacy-list">
                                        <li>Request deletion of your personal information</li>
                                        <li>Withdraw consent for data processing</li>
                                    </ul>
                                </div>

                                <div className="rights-card">
                                    <h4 className="rights-title">Communication Preferences</h4>
                                    <ul className="privacy-list">
                                        <li>Opt-out of marketing communications</li>
                                        <li>Manage SMS/WhatsApp communication preferences</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* <section className="privacy-section">
                            <h2 className="section-title">8. Contact Information</h2>
                            <p className="section-content">
                                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                            </p>

                            <div className="contact-info">
                                <div className="contact-card">
                                    <h4 className="contact-title">Sanguine Recruitment</h4>
                                    <div className="contact-details">
                                        <p><strong>Privacy Email:</strong> privacy@sanguinerecruitment.com</p>
                                        <p><strong>General Email:</strong> info@sanguinerecruitment.com</p>
                                        <p><strong>Phone:</strong> +91-XXXX-XXXXXX</p>
                                        <p><strong>WhatsApp:</strong> +91-9999999999</p>
                                        <p><strong>Website:</strong> www.sanguinerecruitment.com</p>
                                        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/sanguinerecruitment/" target="_blank" rel="noopener noreferrer">@sanguinerecruitment</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="response-time">
                                <p className="section-content">
                                    <strong>Response Time:</strong> We respond to privacy inquiries within 5 business days and complete requests within 30 days as required by law.
                                </p>
                            </div>
                        </section> */}

                        <section className="privacy-section">
                            <h2 className="section-title">9. SMS and WhatsApp Communications</h2>
                            <p className="section-content">
                                We may communicate with you via SMS and WhatsApp for business purposes. Please note:
                            </p>

                            <div className="communication-cards">
                                <div className="comm-card">
                                    <h4 className="comm-title">SMS Communications:</h4>
                                    <ul className="privacy-list">
                                        <li>We may send job alerts, appointment reminders, and updates via SMS</li>
                                        <li>Standard messaging rates may apply based on your mobile carrier plan</li>
                                        <li>You can opt-out at any time by replying "STOP" to any SMS message</li>
                                        <li>We use secure messaging platforms and 10DLC numbers for SMS delivery</li>
                                    </ul>
                                </div>

                                <div className="comm-card">
                                    <h4 className="comm-title">WhatsApp Communications:</h4>
                                    <ul className="privacy-list">
                                        <li>We may use WhatsApp for candidate communications and updates</li>
                                        <li>Messages sent through WhatsApp are subject to WhatsApp's privacy policy</li>
                                        <li>WhatsApp communications are encrypted end-to-end</li>
                                        <li>You can request to discontinue WhatsApp communications at any time</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="privacy-section">
                            <h2 className="section-title">10. Governing Law</h2>
                            <p className="section-content">
                                This Privacy Policy is governed by the laws of India and any disputes will be resolved in the appropriate courts of India.
                            </p>
                        </section>

                        <section className="privacy-section">
                            <h2 className="section-title">11. Consent</h2>
                            <p className="section-content">
                                By using our Website and services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
                            </p>
                        </section>

                        <div className="privacy-footer">
                            <div className="document-info">
                                <p><strong>Document Version:</strong> 1.0</p>
                                <p><strong>Next Review Date:</strong> January 1, 2026</p>
                                <p><em>This Privacy Policy is available in multiple languages upon request.</em></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;