import React from 'react';
// import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Plan from './Plan';
import './OurPlans.scss'

import jumpStart from '../images/planStart.jpg'
import sprint from '../images/planSprint.jpg'
import finish from '../images/planFinish.jpg'

const OurPlans = () => {
    const navigation = useNavigate();
    const navigateTo = () => navigation('../log-in');

    return (
        <Container className='py-5 my-3'>
        <div className = 'title'>
            Our Plans
            <p className='description py-4'>
            We offers a variety of meal planning options to fit your lifestyle 
            and dietary needs. Choose from our weekly or monthly plans and enjoy 
            delicious, healthy meals delivered right to your door. Say goodbye 
            to the stress of meal planning and hello to healthy, delicious meals 
            with our customizable plans!
            </p>
        </div>
        <Row>
            <Col>
                <Plan title= "Jumpstart" description="Not sure where to start? 
                Use this plan to begin your journey of leading a healthier lifestyle. 
                Comes with featured articles, monthly planning meals." image={ jumpStart }/>
            </Col>
            <Col>
                <Plan title= "Sprint" description="Build up your routine and diet, 
                never go back to an your old self again! Comes with featured articles, 
                meals planning restricted to workout routine, tickets to health conferences." image={ sprint }/>
            </Col>
            <Col>
                <Plan title= "Triathlon" description="Looking to incorporate your 
                diet into your life forever? This plan incorporates a variety of healthy 
                and delicious meals that are tailored to support your fitness and nutrition goals. 
                Comes with personalized nutritionists consultancy." image={ finish }/>
            </Col>
        </Row>
        <div className='division'>
            Or
            <div>
            <button className='still' onClick = {navigateTo}>
                Sign Up Now                
            </button>
            </div>
        </div>
        </Container>
    )
}

export default OurPlans