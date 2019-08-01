import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../images/logo.png'
import '../../static/css/Header.css'
export default () => {
  return (
    <>
    <div className="container">
      <Navbar expand="lg">
        <Navbar.Brand href="#home"><img alt="twoBytes" src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/profile">My Profile</Nav.Link>
            <Nav.Link href="/aboutus">About us</Nav.Link>
            <Nav.Link href="/jobs">Jobs</Nav.Link>
            <Nav.Link href="/clients">Clients</Nav.Link>
            <Nav.Link href="/employes">Employers</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    </>
  )
}
