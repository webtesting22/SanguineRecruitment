import React, { useState, useEffect } from 'react';
import { Drawer, Button } from 'antd';
import './NavigationStyle.css';
import NavigationLinks from './NavigationLinks';
const MegaNavigation = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
    const [navVisible, setNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 992);
        
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setNavVisible(false);
            } else {
                setNavVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const onClose = () => {
        setDrawerVisible(false);
    };

    return (
        <div className={`mega-nav-container ${navVisible ? 'visible' : 'hidden'}`}>
            <div className="nav-logo">
                <a href="/">
                    <img src="/images/Logo/SanguineRecruitmentLogo.avif" alt="Sanguine Logo" />
                </a>
            </div>

            {isMobile ? (
                <div className={`menu-button ${drawerVisible ? 'open' : ''}`} onClick={showDrawer}>
                    <div className="menu-bar"></div>
                    <div className="menu-bar"></div>
                    <div className="menu-bar"></div>
                </div>
            ) : (
                <>
                 <div className="desktop-nav">
                     <div className="desktop-nav-links">
                         {NavigationLinks.map((link, index) => (
                             <a href={link.path} key={index} className="desktop-link">
                                 {link.link}
                             </a>
                         ))}
                     </div>
                   
                </div>
                <div>
                      <Button type="primary" className="lets-talk-btn">
                         Let's Talk
                     </Button>
                 </div>
                </>
             )}
            
            {isMobile && (
                 <Drawer
                    placement="right"
                    onClose={onClose}
                    visible={drawerVisible}
                    className="mega-nav-drawer"
                >
                    <div className="drawer-close-button" onClick={onClose}>
                        <div className="menu-bar"></div>
                        <div className="menu-bar"></div>
                    </div>
                    <div className="drawer-nav-links">
                        {NavigationLinks.map((link, index) => (
                            <a
                                href={link.path}
                                key={index}
                                className="drawer-link"
                                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                            >
                                {link.link}
                            </a>
                        ))}
                    </div>
                </Drawer>
            )}
        </div>
    );
};

export default MegaNavigation;