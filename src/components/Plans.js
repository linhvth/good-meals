import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Plan from '../elements/Plan';
import './Plans.scss';
import jumpStart from '../images/planStart.jpg';
import sprint from '../images/planSprint.jpg';
import finish from '../images/planFinish.jpg';

const Plans = () => {
    return (
        <div>
            <Container className="py-5 my-3">
            <Row>
                <Col xs={12} sm ={12} md={4}>
                    <Plan title= "Jumpstart" image={ jumpStart }/>
                </Col>
                <Col xs={12} sm ={12} md={8} className = 'align-self-center'>
                    <p className='plan-description'>
                    This plan is perfect for those who are new to healthy eating 
                    and want to kickstart their journey towards a healthier lifestyle. 
                    With a focus on whole, unprocessed foods and balanced meals, 
                    this plan will help you establish healthy eating habits and set you on the right path.
                    </p>
                    <ul className = "plan-detail">
                        <li>A 7-day meal plan with easy-to-follow recipes</li>
                        <li>A grocery list to help you shop for the week</li>
                        <li>Tips for healthy eating and meal prep</li>
                        <li>Access to a community of like-minded individuals for support and motivation</li>
                    </ul>
                    
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm ={12} md={8} className = 'align-self-center order-2 order-md-1'>
                    <p className='plan-description'>
                    This plan is designed for those who are looking for a short-term boost 
                    to their healthy eating habits. With a focus on nutrient-dense foods and quick, 
                    easy-to-prepare meals, this plan is perfect for busy individuals who want to 
                    eat healthily without spending hours in the kitchen.
                    </p>
                    <ul className = "plan-detail">
                        <li>A 14-day meal plan with quick, easy-to-prepare recipes</li>
                        <li>A grocery list to help you shop for the week</li>
                        <li>Tips for healthy eating on-the-go</li>
                        <li>Access to a community of like-minded individuals for support and motivation</li>
                    </ul>
                </Col>
                <Col xs={12} sm ={12} md={4} className = 'order-1 order-md-2'>
                    <Plan title= "Sprint" image={ sprint }/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm ={12} md={4}>
                    <Plan title= "Finish" image={ finish }/>
                </Col>
                <Col xs={12} sm ={12} md={8} className = 'align-self-center'>
                    <p className='plan-description'>
                    This plan is for those who are committed to leading a healthy lifestyle and 
                    want to take their nutrition to the next level. With a focus on performance 
                    and endurance, this plan includes nutrient-dense meals and snacks designed to 
                    fuel your body and help you reach your fitness goals.
                    </p>
                    <ul className = "plan-detail">
                        <li>A 30-day meal plan with performance-focused recipes</li>
                        <li>A grocery list to help you shop for the week</li>
                        <li>Tips for fueling your body for optimal performance</li>
                        <li>Access to a community of like-minded individuals for support and motivation</li>
                    </ul>
                </Col>
            </Row>
            </Container>
        </div>
        
    )
}

export default Plans