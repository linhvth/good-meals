import React from 'react';
import footerLinks from '../data/footerLinks';
import { Container, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './Footer.scss'

const Column = ({ title, links }) => {
  return (
    <div className='col-4 d-flex flex-column'>
        <h6 className="fw-bold text-white text-center"> { title } </h6>

        {   links.map((link, index) => {
            return <a className='text-white text-decoration-none text-center footer-item my-1' 
                        href={ link.url } 
                        key= {index} > { link.text } 
                    </a>
            })
        }

      
    </div>
  )
}

export const Footer = () => {
  return (
    <div className='pt-5 pb-3 container-fluid text-white' id='footer'>
        <Container className='mt-3'>
            <Row className='mb-1'>
                    <Col lg={4} className='my-auto fw-bold brand-name'>Good Meals</Col> 
                    {/* <Col lg={} /> */}
                    <Col lg={8} className='justify-content-end'>
                        <div className="row" id='footer-item'>
                            {
                                footerLinks.map(
                                    col => <Column title={col.title} links={col.links} key={col.title} />)
                            }
                        </div> 
                    </Col>
                </Row>

                <Row className='d-flex pt-2 my-5 border-top' id='footer-bot'>
                    <Col lg={8} className='my-auto'>
                        <p> 
                            <FontAwesomeIcon icon={ faCopyright } /> 
                            Good Meals, Inc. 2023. Thank you for choosing us! 
                        </p>
                    </Col>
                    <Col lg={2} className='my-auto justify-content-end'>
                        <p className='text-end'>Follow us: </p>
                    </Col>
                    <Col md={2} className='my-auto justify-content-end'>
                        <ul className='list-unstyled d-flex'>
                            <li className='mx-2 fa-2x'><FontAwesomeIcon icon={ faFacebook } /></li>
                            <li className='mx-2 fa-2x'><FontAwesomeIcon icon={ faInstagram } /></li>
                            <li className='mx-2 fa-2x'><FontAwesomeIcon icon={ faYoutube } /></li>
                            <li className='mx-2 fa-2x'><FontAwesomeIcon icon={ faTwitter } /></li>
                        </ul>
                    </Col>
                </Row>
        </Container>
    </div>
    
  );
};

export default Footer