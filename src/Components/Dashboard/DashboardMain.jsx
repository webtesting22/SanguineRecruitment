import React, { useState, useEffect, useContext, useMemo, useCallback } from 'react';
import { Input, Button, Checkbox, Select, Drawer, Modal, Divider, Tag } from 'antd';
import { MdArrowBack, MdFilterList, MdGridView, MdAttachment, MdLink, MdKeyboardArrowDown, MdTune, MdEmail, MdPhone, MdLocationOn, MdWork, MdSchool } from 'react-icons/md';
import './Dashboard.css';
import DashboardContext from './DashboardContext/DashboardContext';
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { FaUserAlt } from "react-icons/fa";

const { Option } = Select;

const DashboardMain = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [profileModalVisible, setProfileModalVisible] = useState(false);
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [filters, setFilters] = useState({
        searchTerm: '', // ✅ Rename from jobTitle
        categories: [],
        location: '',
        employmentTypes: [],
        salaryType: ''
    });

    const { applicationsData, loading, error } = useContext(DashboardContext)

    // Check if device is mobile
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => window.removeEventListener('resize', checkIsMobile);

    }, []);

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/sign-in';
    };


    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const closeDrawer = () => {
        setDrawerVisible(false);
    };

    const toggleViewMode = () => {
        setViewMode(viewMode === 'grid' ? 'list' : 'grid');
    };

    const showProfileModal = (app) => {
        setSelectedCandidate(app);
        setProfileModalVisible(true);
    };

    const closeProfileModal = () => {
        setProfileModalVisible(false);
        setSelectedCandidate(null);
    };

    const uniqueJobTitles = Array.isArray(applicationsData)
        ? [...new Set(applicationsData.map(app => app.applyingFor))]
        : [];

    const engagementTypes = Array.isArray(applicationsData)
        ? [...new Set(applicationsData.map(app => app.engagementType).filter(Boolean))]
        : [];

    const TAG_COLORS = [
        "rgb(0, 70, 117)"
    ];
    const randomColor = TAG_COLORS[Math.floor(Math.random() * TAG_COLORS.length)];
    // Filter Component

    const filteredApplications = useMemo(() => {
        return applicationsData.filter((app) => {
            const matchesSearch =
                !filters.searchTerm ||
                [
                    app.fullName,
                    app.applyingFor,
                    app.currentJobTitle,
                    app.currentLocation,
                    app.engagementType,
                    app.highestQualification,
                    ...(app.keySkills || []),
                ]
                    .filter(Boolean) // remove undefined/null
                    .join(' ')
                    .toLowerCase()
                    .includes(filters.searchTerm.toLowerCase());

            const matchesCategory =
                !filters.categories.length ||
                filters.categories.includes(app.applyingFor) ||
                filters.categories.includes(app.currentJobTitle);

            const matchesLocation =
                !filters.location ||
                app.currentLocation?.toLowerCase().includes(filters.location.toLowerCase());

            const matchesEmployment =
                !filters.employmentTypes.length || filters.employmentTypes.includes(app.engagementType);

            return matchesSearch && matchesCategory && matchesLocation && matchesEmployment;
        });
    }, [applicationsData, filters]);

    const FilterContent = (
        <>
            <div className="filter-section">
                <div className="filter-title">
                    Search
                    {/* <MdKeyboardArrowDown size={20} /> */}
                </div>
                <div className="filter-content">
                    <Input
                        placeholder="Search by name, position, location..."
                        className="filter-input"
                        value={filters.searchTerm}
                        onChange={(e) =>
                            setFilters((prev) => ({
                                ...prev,
                                searchTerm: e.target.value
                            }))
                        }
                    />
                </div>
            </div>

            <div className="filter-section">
                <div className="filter-title">
                    Categories
                    {/* <MdKeyboardArrowDown size={20} /> */}
                </div>
                <div className="filter-content">
                    <Select
                        mode="multiple" // enable multiple selection
                        placeholder="Select"
                        className="filter-select"
                        allowClear
                        value={filters.categories}
                        onChange={(value) => setFilters({ ...filters, categories: value })}
                    >
                        {uniqueJobTitles.map((title, index) => (
                            <Option key={index} value={title}>
                                {title}
                            </Option>
                        ))}
                    </Select>

                </div>
            </div>

            <div className="filter-section">
                <div className="filter-title">
                    Location
                    {/* <MdKeyboardArrowDown size={20} /> */}
                </div>
                <div className="filter-content">
                    <Input
                        placeholder="Suburb or Town"
                        className="filter-input"
                        value={filters.location}
                        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    />
                </div>
            </div>

            <div className="filter-section">
                <div className="filter-title">
                    Type of employment
                    {/* <MdKeyboardArrowDown size={20} /> */}
                </div>
                <div className="filter-content">
                    <div className="checkbox-group">
                        {engagementTypes.map((type) => (
                            <Checkbox
                                key={type}
                                className="custom-checkbox"
                                checked={filters.employmentTypes.includes(type)}
                                onChange={(e) => {
                                    const updated = e.target.checked
                                        ? [...filters.employmentTypes, type]
                                        : filters.employmentTypes.filter(t => t !== type);
                                    setFilters({ ...filters, employmentTypes: updated });
                                }}
                            >
                                {type}
                            </Checkbox>
                        ))}
                    </div>
                </div>
            </div>

            {/* <div className="filter-section">
                <div className="filter-title">
                    Salary Type
                    <MdKeyboardArrowDown size={20} />
                </div>
            </div> */}
        </>
    )

    return (
        <div className="dashboard-container">
            {/* Desktop Sidebar */}
            {!isMobile && (
                <div className="dashboard-sidebar">
                    {/* <button className="back-button">
                        <MdArrowBack size={20} />
                        Back
                    </button> */}
                    <img src="/images/Logo/SanguineRecruitmentLogo.avif" alt="" style={{ width: "180px" }} />

                    <h1 className="sidebar-title">Filters</h1>

                    {FilterContent}

                    <Button className="logout-button" onClick={handleLogout}>
                        Logout
                    </Button>
                </div>
            )}

            {/* Mobile Drawer */}
            <Drawer
                title={
                    <div className="drawer-header">
                        <h2 className="drawer-title">Filters</h2>
                    </div>
                }
                placement="left"
                onClose={closeDrawer}
                open={drawerVisible}
                width={320}
                className="mobile-filter-drawer"
                headerStyle={{
                    background: 'linear-gradient(135deg, #004675 0%, #0066a3 100%)',
                    color: 'white',
                    borderBottom: 'none'
                }}
                bodyStyle={{
                    padding: '24px',
                    background: '#fafafa'
                }}
            >
                <div className="drawer-content">
                    {FilterContent}

                    <div className="drawer-actions">
                        <Button className="apply-filters-btn" onClick={closeDrawer}>
                            Apply Filters
                        </Button>
                        <Button className="logout-button" onClick={handleLogout}>
                            Logout
                        </Button>
                    </div>
                </div>
            </Drawer>

            {/* Floating Action Button for Mobile */}
            {isMobile && (
                <button className="floating-filter-btn" onClick={showDrawer}>
                    <MdTune size={24} />
                </button>
            )}

            {/* Main Content */}
            <div className={`dashboard-main ${isMobile ? 'mobile-main' : ''}`}>
                <div className="main-header">
                    <div className="header-controls">
                        {isMobile && (
                            <Button className="mobile-filter-toggle" onClick={showDrawer}>
                                <MdFilterList size={20} />
                                Filters
                            </Button>
                        )}
                        {/* {!isMobile && (
                            <Button className="filter-toggle">
                                <MdFilterList size={20} />
                            </Button>
                        )} */}
                        {/* <Select defaultValue="Board" className="board-select">
                            <Option value="Board">Board</Option>
                            <Option value="List">List</Option>
                        </Select> */}
                    </div>
                    <Button
                        className={`grid-toggle ${viewMode === 'list' ? 'active' : ''}`}
                        onClick={toggleViewMode}
                    >
                        <MdGridView size={20} />
                    </Button>
                </div>

                {/* Applications Grid/List */}
                <div className={`applications-container ${viewMode === 'list' ? 'list-view' : 'grid-view'}`}>
                    {filteredApplications.length === 0 ? (
                        <div className="no-data-found">
                            <p style={{ textAlign: 'center', fontSize: '18px', padding: '40px' }}>No data found 🔍</p>
                        </div>
                    ) : (
                        filteredApplications.map((app) => {
                            const randomColor = TAG_COLORS[Math.floor(Math.random() * TAG_COLORS.length)];

                            return (
                                <div
                                    key={app.id}
                                    className={`application-card ${app.isTopPick ? 'top-pick' : ''} ${viewMode === 'list' ? 'list-card' : ''}`}
                                >
                                    {/* {app.isTopPick && (
                                <div className="top-pick-badge">TOP PICK</div>
                            )} */}

                                    <div className="card-header">
                                        <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt={app.fullName} className="avatar" />
                                        {/* <div className="position-tag" style={{ backgroundColor: randomColor }}>
                                            {app.applyingFor}
                                        </div> */}
                                        <div>
                                            <h3 className="candidate-name">{app.fullName}</h3>
                                            <p className="candidate-location">{app.currentLocation}</p>
                                        </div>
                                    </div>

                                    <div className="card-content">

                                        <div style={{ display: "flex", justifyContent: "start", marginBottom: "20px" }}>
                                            <div className="position-tag" style={{ backgroundColor: randomColor }}>
                                                {app.applyingFor}
                                            </div>
                                        </div>

                                        <div className="card-links">
                                            <div className="resume-link">
                                                <MdAttachment size={16} />
                                                <a href={app.resumeUrl} download target="_blank" rel="noopener noreferrer">
                                                    Resume
                                                </a>

                                            </div>
                                            <div className="website-link">
                                                <MdLink size={16} />
                                                <a href={app.portfolioUrl} target='_blank'>Portfolio</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-actions">
                                        {/* <button
                                        className="bookmark-btn"
                                        onClick={() => toggleSave(app.id)}
                                    >
                                        {app.isSaved ? <MdBookmark size={20} /> : <MdBookmarkBorder size={20} />}
                                    </button> */}
                                        <Link to={app.linkedInProfileUrl} target='_blank'><FaLinkedin style={{ fontSize: "20px", color: "#0066a3" }} /></Link>
                                        <div style={{ display: "flex", gap: "10px" }}>
                                            <Button
                                                className="profile-btn"
                                                onClick={() => showProfileModal(app)}
                                            >
                                                View Profile
                                            </Button>
                                            <Button className="contact-btn" onClick={() => window.open(`tel:${app.phone}`, '_self')}
                                            >Contact</Button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

                {/* Profile Modal */}
                <Modal
                    title="Profile"
                    open={profileModalVisible}
                    onCancel={closeProfileModal}
                    footer={null}
                    width={700}
                    destroyOnClose
                >
                    {selectedCandidate && (
                        <div>
                            {/* Header Section */}
                            <Tag color={selectedCandidate.tagColor || "#004675"} style={{ fontSize: '14px', padding: '8px 16px', width: "100%", textAlign: "center", marginTop: "10px" }} className='OnlyMobile'>
                                {selectedCandidate.applyingFor || "Candidate"}
                            </Tag>
                            <br />
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                    <img
                                        src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
                                        alt={selectedCandidate.fullName}
                                        style={{ width: '80px', height: '80px', borderRadius: '16px', objectFit: 'cover' }}
                                    />
                                    <div>
                                        <h2 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 8px 0' }}>{selectedCandidate.fullName}</h2>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                            <MdWork size={16} />
                                            {selectedCandidate.applyingFor || selectedCandidate.currentJobTitle}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                            <MdLocationOn size={16} />
                                            {selectedCandidate.currentLocation}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                            <span>🗓️</span> {selectedCandidate.totalExperienceYears}+ years
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                            <span>📍</span> {selectedCandidate.engagementType}
                                        </div>
                                    </div>
                                </div>

                                {/* <Tag color={selectedCandidate.tagColor || "#004675"} style={{ fontSize: '14px', padding: '8px 16px', marginTop: "10px" }} className='OnlyPc'>
                                    {selectedCandidate.applyingFor || "Candidate"}
                                </Tag> */}
                            </div>

                            <Divider />

                            {/* Contact Info */}
                            <div style={{ marginBottom: '24px' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Contact Information</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <MdEmail size={16} />
                                        <span>{selectedCandidate.email}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <MdPhone size={16} />
                                        <span>{selectedCandidate.mobileNumber}</span>
                                    </div>
                                    {selectedCandidate.portfolioUrl && (
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <MdLink size={16} />
                                            <a href={selectedCandidate.portfolioUrl} target="_blank" rel="noreferrer">{selectedCandidate.portfolioUrl}</a>
                                        </div>
                                    )}
                                    {selectedCandidate.linkedInProfileUrl && (
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <MdLink size={16} />
                                            <a href={selectedCandidate.linkedInProfileUrl} target="_blank" rel="noreferrer">{selectedCandidate.linkedInProfileUrl}</a>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <Divider />

                            {/* Summary */}
                            <div style={{ marginBottom: '24px' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Professional Summary</h3>
                                <p style={{ lineHeight: '1.6' }}>{selectedCandidate.anyOtherInformation || "No summary provided."}</p>
                            </div>

                            <Divider />

                            {/* Skills */}
                            <div style={{ marginBottom: '24px' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Skills</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {(selectedCandidate.keySkills || []).map((skill, index) => (
                                        <Tag key={index} style={{ marginBottom: '8px' }}>{skill}</Tag>
                                    ))}
                                </div>
                            </div>

                            <Divider />
                            <div style={{ marginBottom: '24px' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Current Job Info</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    <div className='ExistingCompanyinfoText'>
                                        {/* <Row>
                                            <Col lg={24}> */}
                                        <div>
                                            <p>Name: <span>{selectedCandidate.currentCompany || 'N/A'}</span></p>
                                        </div>
                                        {/* </Col>
                                           <Col lg={24}> */}
                                        <div>
                                            <p>Current Job Title: <span>{selectedCandidate.currentJobTitle || 'N/A'}</span></p>
                                        </div>
                                        {/* </Col>
                                           <Col lg={24}> */}
                                        <div>
                                            <p>Current CTC: <span>{selectedCandidate.currentCTC || 'N/A'}</span></p>
                                        </div>
                                        {/* </Col>
                                           <Col lg={24}> */}
                                        <div>
                                            <p>Expected CTC: <span>{selectedCandidate.expectedCTC || 'N/A'}</span></p>
                                        </div>
                                        <div>
                                            <p>Notice Period: <span>{selectedCandidate.noticePeriodDays || 'N/A'}</span></p>
                                        </div>
                                        <div>
                                            <p>
                                                Willing To Relocate:
                                                <span>
                                                    {selectedCandidate.willingToRelocate === true
                                                        ? ' Yes'
                                                        : selectedCandidate.willingToRelocate === false
                                                            ? ' No'
                                                            : 'N/A'}
                                                </span>
                                            </p>
                                        </div>


                                        {/* </Col>
                                        </Row> */}
                                    </div>
                                </div>
                            </div>

                            {/* Education */}
                            <div style={{ marginBottom: '24px' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Education</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <MdSchool size={16} />
                                    <span>{selectedCandidate.highestQualification}</span>
                                </div>
                            </div>

                            <Divider />

                            {/* Documents */}
                            <div style={{ marginBottom: '24px' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Documents</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <MdAttachment size={16} />
                                    <a href={selectedCandidate.resumeUrl} download target="_blank" rel="noopener noreferrer">
                                        Download Resume
                                    </a>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', paddingTop: '16px' }}>

                                {selectedCandidate.linkedInProfileUrl && (
                                    <Button onClick={() => window.open(selectedCandidate.linkedInProfileUrl, '_blank')}>
                                        LinkedIn
                                    </Button>
                                )}
                                <Button onClick={() => window.open(`tel:${selectedCandidate.mobileNumber}`, '_self')}>
                                    Contact
                                </Button>
                                <Button type="primary" style={{ background: '#004675' }} onClick={() => window.open(`mailto:${selectedCandidate.email}`)}>
                                    Send Email
                                </Button>
                            </div>
                        </div>
                    )}
                </Modal>
            </div>
        </div>
    );
};

export default DashboardMain;