import React from 'react';
// import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap';
import Value from './Value';
import './OurValues.scss';

import community from '../images/community.jpg'
import health from '../images/meditate.jpg'
import convenient from '../images/convenient.jpg'

const OurValues = () => {
    return (
        <Container className='py-5 my-3'>
        <div className = 'title'>
            Our Values
            <p className='description py-4'>
            At Good Meals, we believe in the power of good food to bring people together. 
            Our mission is to make meal planning simple and enjoyable by providing our users 
            with a wide variety of delicious and healthy recipes.
            We are committed to promoting sustainable and ethical practices in the food industry. 
            </p>
        </div>
        <Row>
            <Col className ="col-sm-4">
            <Value title= "Community-Driven" description="Good Meals determine to 
            contribute its profit to resolve the waste management issues, 
            supporting local farmers and charities." image={ community }/>
            </Col>
            <Col className ="col-sm-4">
            <Value title= "Health-Oriented" description="We care about your health, 
            and we believe that diets contribute a great portion to how you feel 
            during the day, so our meals are selected and crafted to provide 
            the best nutrition for you regardless of your identity." image={ health }/>
            </Col>
            <Col className ="col-sm-4">
            <Value title= "Convenient" description="Knowing that you come to us 
            as a solution to your busy time, we want to make sure the meals 
            we suggest to you are time-convenient and tailor to your needs." image={ convenient }/>
            </Col>
        </Row>
        </Container>
    )
}

export default OurValues