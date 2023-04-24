import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './NavBar.scss'

import { useAuth } from "../contexts/AuthProvider"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { NavDropdown, NavLink } from 'react-bootstrap';


function NavBar() {
  const { currUser, logout } = useAuth();
  const [error, setError] = useState('');
  console.log(currUser);
  const toLanding = useNavigate();
  
  async function handleLogout() {
    setError('')

    try {
      await logout();
      toLanding('/');
    } catch {
      setError('Failed to log out. Try again.')
    }
  }

  return (
    <Navbar collapseOnSelect expand="lg" className='py-4'>
      {/* Navigation section */}
      <Container>
        <Navbar.Brand href="#/" className='fw-bold'>Good Meals</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='container-fluid'>
                <Nav.Link href="#/all-dishes">All Dishes</Nav.Link>
                <Nav.Link href="#/plans">Plans</Nav.Link>
                <Nav.Link href='#/articles'>Articles</Nav.Link>
                <Nav.Link className='ms-auto' href="#/about-us">About Us</Nav.Link>
                <Nav.Link href="#/help">Help</Nav.Link>
                { currUser ?
                  <>
                    <NavDropdown title="My Account" id="nav-dropdown">
                      <NavDropdown.Item>
                        <NavLink className='text-black' href='/'>My Profile</NavLink>
                      </NavDropdown.Item>
                      
                      <NavDropdown.Divider />
                      <NavDropdown.Item>
                        <NavLink className="text-black" href='/' onClick={ handleLogout }>Log Out</NavLink>
                      </NavDropdown.Item>
                    </NavDropdown>
                    {/* <Nav.Link href="#/">My Profile</Nav.Link>
                    <Nav.Link href='/' onClick={ handleLogout }>Log Out</Nav.Link> */}
                  </>
                  :
                  <>
                    <Nav.Link href="#/log-in">Log In</Nav.Link>
                    <Nav.Link href="#/sign-up">Sign Up</Nav.Link>
                  </>
                }
          </Nav>
          
        </Navbar.Collapse>
      </Container>

      {/* Search box */}
      <Container className='mx-auto'>
        <InputGroup className="d-flex mt-3 mx-auto">
          <Form.Control
              type="search"
              placeholder="Search any dishes (e.g. potato, chicken, etc.)"
              className="search-box"
              aria-label="Search"/>
            <Button variant='outline-light' id='search-button'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
        </InputGroup>
      </Container>
    </Navbar>
  );
}

export default NavBar;