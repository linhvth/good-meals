import React from 'react';
import { Container, Nav, Navbar, Row, Col, Form } from 'react-bootstrap'

import profile from '../images/profile.jpg'
import './MyAccount.scss'


export function MyProfileNavbar() {
    return (
      <Navbar expand="lg" id='profile-setting'>
        <Container className = "setting-box">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="flex-column me-auto w-100">
              <Nav.Link href="/settings">Settings</Nav.Link>
              <Nav.Link href="/my-diet">My Diet</Nav.Link>
              <Nav.Link href="/plan">Plan</Nav.Link>
              <Nav.Link href="/help">Help</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export function MyProfileContent() {
  return (
    <Container>
      <div id='profile-img'>
        <img src={profile} alt='profile' className='w-100 h-100' />
      </div>

      <h2 className='section-head'> General Info </h2>
      <Form.Group className='mb-3'>
        <Row className = 'info-row'>
          <Col>
            <Form.Label>FIRST NAME</Form.Label>
            <Form.Control type="text" value="Chi" readOnly/>
          </Col>
          <Col>
            <Form.Label>LAST NAME</Form.Label>
            <Form.Control type="text" value="Hoang" readOnly/>
          </Col>
        </Row>
        <Row className='info-row'>
          <Col>
            <Form.Label>EMAIL ADDRESS</Form.Label>
            <Form.Control type="text" value="chikim0101@gmail.com" readOnly/>
          </Col>
          <Col>
            <Form.Label>PHONE NUMBER</Form.Label>
            <Form.Control type="text" value="+84123456789" readOnly/>
          </Col>
        </Row>
        <Row className='info-row'>
          <Col>
            <Form.Label>BIRTHDATE</Form.Label>
            <Form.Control type="text" value="01/01/2002" readOnly/>
          </Col>
          <Col>
            <Form.Label>LOCATION</Form.Label>
            <Form.Control type="text" value="Thanh Hoa, Vietnam" readOnly/>
          </Col>
        </Row>
      </Form.Group>
      <h2 className='section-head'> Account Setting </h2>
      <Form.Group className='mb-3'>
        <Row className = 'info-row'>
          <Col>
            <Form.Label>USERNAME</Form.Label>
            <Form.Control type="text" value="callmechihoang" readOnly/>
          </Col>
          <Col>
            <Form.Label>PASSWORD</Form.Label>
            <Form.Control type="text" value="********" readOnly/>
          </Col>
        </Row>
        <Row className = 'info-row'>
          <Col>
            <Form.Label>Remind me on daily meal</Form.Label>
            <Form.Control type="text" value="Yes" readOnly/>
          </Col>
        </Row>
        <Row className = 'info-row'>
          <Col>
            <Form.Label>Send me updates on new dishes</Form.Label>
            <Form.Control type="text" value="Yes" readOnly/>
          </Col>
        </Row>
      </Form.Group>
    </Container>
  )
}

const MyAccount = () => {
    return (
      <Container className='py-5 my-3'>
        <Row>
          <Col md = {3}>
            <div className = 'new-title'>
                  Hi KimChi1010!
            </div>
            <MyProfileNavbar/>
            </Col>
            <Col>
              <MyProfileContent/> 
            </Col>
        </Row>
      </Container>
    )
}

export default MyAccount