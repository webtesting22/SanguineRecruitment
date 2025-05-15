import React, { useState } from "react";
import "./NavigationStyle.css";
import NavigationLinks from "./NavigationLinks";
import { Menu, Dropdown, Button, Drawer, Collapse } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import AnimatedBtn from "../CommonUsedComponents/AnimatedButton/AnimatedBtn";
import { IoMdContact } from "react-icons/io";
import { LOGO_FILE } from "./NavigationLinks";
import { Link } from "react-router-dom";
const { Panel } = Collapse;
const MegaNavigation = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const renderDropdownMenu = (sublinks) => (
        <Menu id="MenuEdit">
            {sublinks.map((item, idx) => (
                <Menu.Item key={idx} className="DropdownMenulink">
                    <Link to={item.path}>{item.link}</Link>
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <>
            <div id="NavigationBarContainer">
                <div className="NavigationInner hero-home-content">
                    {/* Logo */}
                    <div className="NavigationLogoContainer">
                        <Link to="/" onClick={() => {
                            setTimeout(() => {
                                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                            }, 100); // 0.3s delay
                        }}><img src={LOGO_FILE} alt="Logo" /></Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="NavigationLinksContainer desktop-nav">
                        {NavigationLinks.map((navItem, index) =>
                            navItem.sublink.length > 0 ? (
                                <Dropdown
                                    key={index}
                                    overlay={renderDropdownMenu(navItem.sublink)}
                                    trigger={["hover"]}
                                >
                                    <Link className="NavLink DropdownLinkContainer" to={navItem.path}>
                                        {navItem.link} <img src="/images/icons/CommonArrowicon.svg" alt="" />
                                    </Link>
                                </Dropdown>
                            ) : (
                                <Link className="NavLink" key={index} to={navItem.path}>
                                    {navItem.link}
                                </Link>
                            )
                        )}
                    </div>

                    {/* Contact Button & Mobile Icon */}
                    <div className="ContactUsBtn">
                        <div className="desktop-nav">
                            <AnimatedBtn
                                text="Contact Us"
                                hoverText="Contact Us"
                                icon={<IoMdContact />}
                            />
                        </div>
                        <div className="mobile-menu-icon">
                            <MenuOutlined onClick={() => setOpenDrawer(true)} style={{ fontSize: "24px" }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            <Drawer
                title={<img src="https://via.placeholder.com/100x40" alt="Logo" style={{ height: 40 }} />}
                placement="right"
                onClose={() => setOpenDrawer(false)}
                open={openDrawer}
            >
                <div className="mobile-drawer-links">
                    <Collapse ghost expandIconPosition="end">
                        {NavigationLinks.map((navItem, index) =>
                            navItem.sublink.length > 0 ? (
                                <Panel header={navItem.link} key={index}>
                                    <div className="drawer-sublinks">
                                        {navItem.sublink.map((sub, idx) => (
                                            <Link key={idx} to={sub.path} className="drawer-sublink">
                                                {sub.link}
                                            </Link>
                                        ))}
                                    </div>
                                </Panel>
                            ) : (
                                <div key={index} className="drawer-main-link">
                                    <Link to={navItem.path}>{navItem.link}</Link>
                                </div>
                            )
                        )}
                    </Collapse>
                    <div style={{ marginTop: 20 }}>
                        <AnimatedBtn
                            text="Contact Us"
                            hoverText="Contact Us"
                            icon={<IoMdContact />}
                        />
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default MegaNavigation;
