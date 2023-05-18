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
  return (
    <Container className='mx-auto'>
      <InputGroup className="d-flex mt-2 mb-3 mx-auto">
        <Form.Control
            type="search"
            placeholder="Search any dishes (e.g. potato, chicken, etc.)"
            className="search-box"
            aria-label="Search"
        />
        <Button variant='outline-light' id='search-button'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </InputGroup>
    </Container>
  )
}

function NavBar() {
  const { currUser, logout } = useAuth();
  const [error, setError] = useState('');
  const [ fix, setFix ] = useState(false);
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

  // function setFixed () {
  //   if (window.scrollY >= 100) {
  //     setFix(true);
  //   } else {
  //     setFix(false);
  //   }
  // }

  // window.addEventListener("scroll", setFixed);

  return (
    <Navbar collapseOnSelect expand="lg" className='py-2' sticky='top' id='navbar'>
      {/* Navigation section */}
      <Container id='navbar'>
        <Navbar.Brand href="/good-meals" className='fw-bold'>Good Meals</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='container-fluid'>
                <Nav.Link href="/good-meals/all-dishes">All Dishes</Nav.Link>
                <Nav.Link href="/good-meals/plans">Plans</Nav.Link>
                <Nav.Link href='/good-meals/articles'>Articles</Nav.Link>
                <Nav.Link className='ms-auto' href="/good-meals/about-us">About Us</Nav.Link>
                <Nav.Link href="/good-meals/help">Help</Nav.Link>
                { currUser ?
                  <>
                    <NavDropdown title="My Account" id="nav-dropdown">
                      <NavDropdown.Item>
                        <NavLink className='text-black' href='/good-meals/my-account' onClick={ handleAccount }>My Profile</NavLink>
                      </NavDropdown.Item>
                      
                      <NavDropdown.Divider />
                      <NavDropdown.Item>
                        <NavLink className="text-black" href='/' onClick={ handleLogout }>Log Out</NavLink>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                  :
                  <>
                    <Nav.Link href="/good-meals/log-in">Log In</Nav.Link>
                    <Nav.Link href="/good-meals/sign-up">Sign Up</Nav.Link>
                  </>
                }
          </Nav>
          
        </Navbar.Collapse>
      </Container>

      {/* Search box */}
      { fix ? <div /> : <SearchBox /> }
    </Navbar>
  );
}

export default NavBar;