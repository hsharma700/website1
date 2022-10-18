import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <>
   

      <Navbar bg="white" variant="light" expand="lg">
        <Container className="container">
          <Navbar.Brand className="navtitle ml-auto" bf="40px" href="/home">TYC<span>OO</span>N&reg;</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navItems">
            <Nav.Link id="navHome" href="/home">HOME</Nav.Link>
            <NavDropdown title="ABOUT US" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">COMPANY</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">OUR TEAM</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">NEWS</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.4">INVESTORS</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/services">SERVICES</Nav.Link>
            <Nav.Link href="/portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link href="/pricing">PRICING</Nav.Link>
            <Nav.Link href="/contact">CONTACT</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
