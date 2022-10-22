import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';


const Header = () => {
  const {user, userLogout} = useContext(AuthContext);

  const handleLogout = () => {
    userLogout()
    .then( () => {})
    .catch( error => console.error(error))
  }
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
            <Nav.Link href="#deets">
              {
                user?.uid ?
                <>
                <span>{user?.displayName}</span>
                <Button onClick={handleLogout} variant="danger ms-2">Logout</Button>

                </>
                :
                <>
                  <Link to='/login'><Button variant="primary me-2">Login</Button></Link>
                  <Link to='/register'><Button variant="primary">Register</Button></Link>
                </>
              }
              
              
              
              </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {
                user?.photoURL? 
                <Image 
                style={{height: '30px'}}
                roundedCircle
                src={user?.photoURL}
                ></Image> :
              <FaUserCircle className='fs-2'></FaUserCircle>
              }
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