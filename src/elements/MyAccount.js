import React from 'react';
import { Container, Nav, Navbar, Row, Col, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import profile from '../images/profile.jpg'
import './MyAccount.scss'


export function MyProfileNavbar() {
    return (
      <Navbar style={{ backgroundColor: 'transparent'}} expand="lg">
        <Container className = "setting-box">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="flex-column me-auto" style={{ width: '100%' }}>
              <Nav.Link href="#settings" style={{ color: 'black' }}>Settings</Nav.Link>
              <Nav.Link href="#my-diet" style={{ color: 'black' }}>My Diet</Nav.Link>
              <Nav.Link href="#plan" style={{ color: 'black' }}>Plan</Nav.Link>
              <Nav.Link href="#help" style={{ color: 'black' }}>Help</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export function MyProfileContent() {
  return (
    <Container className='py-0'>
      <div style={{ 
        width: '200px', 
        height: '200px'}}>
        <img src = {profile} alt = 'profile' style = {{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          borderRadius: '100px'}}>
        </img>
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
        <Row className = 'info-row'>
          <Col>
            <Form.Label>EMAIL ADDRESS</Form.Label>
            <Form.Control type="text" value="chikim0101@gmail.com" readOnly/>
          </Col>
          <Col>
            <Form.Label>PHONE NUMBER</Form.Label>
            <Form.Control type="text" value="+84123456789" readOnly/>
          </Col>
        </Row>
        <Row className = 'info-row'>
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