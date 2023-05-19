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

const SearchBox=() => {
  const [ search, setSearch ] = useState('');
  const toSearch = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    toSearch(`/search?dish=${ search }`);
    setSearch('');
  }

  return (
    <div className='w-100'>
      <Form.Group className="w-100 d-flex justify-content-center mt-2 mb-3 mx-auto" 
                  onSubmit={ handleSearch }>
        <Form className='w-100'>
          <Form.Control
              type="search"
              placeholder="Search any dishes (e.g. potato, chicken, etc.)"
              className="search-box"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value) }
              value={ search }
          />
        </Form>
        <Button variant='dark' id='search-button' type='submit' onClick={ handleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </Form.Group>
    </div>
  )
}

function NavBar() {
  const { currUser, logout } = useAuth();
  const [error, setError] = useState('');
  const toLanding = useNavigate();
  const toAccount = useNavigate();

  function handleAccount() {
    toAccount('/my-account')
  }

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
    <Navbar collapseOnSelect expand="lg" className='py-2' sticky='top' id='navbar'>
      {/* Navigation section */}
      <Container id='navbar'>
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
                        <NavLink className='text-black' onClick={ handleAccount }>My Profile</NavLink>
                      </NavDropdown.Item>
                      
                      <NavDropdown.Divider />
                      <NavDropdown.Item>
                        <NavLink className="text-black" href='/' onClick={ handleLogout }>Log Out</NavLink>
                      </NavDropdown.Item>
                    </NavDropdown>
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
      <Container className='w-100 d-flex flex-column justify-content-center my-auto'>
        <SearchBox /> 
      </Container>
    </Navbar>
  );
}

export default NavBar;