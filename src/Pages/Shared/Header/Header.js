import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar className='mb-3 shadow' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand><Link to="/">Anaconda-News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#AllNews">All News</Nav.Link>
            <Nav.Link href="#AboutUs">About Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">+Advertisement</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <FaUserCircle></FaUserCircle>
            </Nav.Link>
          </Nav>
          <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;