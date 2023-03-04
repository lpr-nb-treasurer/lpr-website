import React from 'react'

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
    const baseURL = '/lpr-website';
    return (
        <Navbar bg="light" expand="sm">
            <Container>
                <Navbar.Brand href={baseURL+"/"}><img
                    src={baseURL+"/cropped-LPR-maroon-2.png"}
                    width="80"
                    height="60"
                    alt=""
                />prebuild 1
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <NavDropdown title="About" id="basic-nav-dropdown" align="end">
                            <NavDropdown.Item href={baseURL+"/about/"}>About Us</NavDropdown.Item>
                            <NavDropdown.Item href={baseURL+"/membership/"}>Membership</NavDropdown.Item>
                            <NavDropdown.Item href={baseURL+"/academics/"}>Academics</NavDropdown.Item>
                            <NavDropdown.Item href={baseURL+"/stepping-strolling/"}>Stepping &amp; Strolling</NavDropdown.Item>
                            <NavDropdown.Item href={baseURL+"/upcoming-events/"}>Upcoming Events</NavDropdown.Item>
                            <NavDropdown.Item href={baseURL+"/expansion/"}>Expansion</NavDropdown.Item>
                            <NavDropdown.Item href={baseURL+"/incorporation-chartering-process-and-non-profit/"}>Incorporation, Chartering Process, and Non-Profit</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Brothers" id="basic-nav-dropdown" align={{ sm: 'end' }}>
                            <NavDropdown.Item href={baseURL+"/brothers/founding-chapter/"}>Founding Chapter</NavDropdown.Item>
                            <NavDropdown.Item href={baseURL+"/active-house/"}>Active House</NavDropdown.Item>
                            <NavDropdown.Item href={baseURL+"/brothers-alumni-chapter/"}>Alumni Chapter</NavDropdown.Item>
                            <NavDropdown.Item href={baseURL+"/brothers/executive-board/"}>Executive Board</NavDropdown.Item>
                            <NavDropdown.Item href={baseURL+"/history/national-board/"}>National Board</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Philanthropy" id="basic-nav-dropdown" align={{ sm: 'end' }}>
                            <NavDropdown.Item href={baseURL+"/philanthropy/local/"}>Local Philanthropies</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
