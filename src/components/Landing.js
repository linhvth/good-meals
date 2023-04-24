import React from "react";
import { Container, Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './Landing.scss'

import OurPlans from "../elements/OurPlans";
import OurDishes from "../elements/OurDish";
import Articles from "../elements/Articles";

import background from '../images/home_background.jpg';

function Landing() {
    const navigation = useNavigate();
    const navigateTo = () => navigation('../log-in');
    return (
        <Container fluid className="p-0">
            <Card className="home_background">
                <img className ="background" src = { background } alt = { background } responsive/>
                <h1 className="background_text">
                    Customize your diet with selection from thousands of dishes <br/>
                <div className = "spacing-40"></div>
                    Meal planning has never been easier with <strong>Good Meals!</strong>
                <div className='division'>
                    <button className='still' onClick = {navigateTo}>
                    Sign Up Now                
                    </button>          
                </div>
                </h1>
            </Card>
            <OurPlans/>
            <OurDishes/>
            <Articles/>
        </Container>
    )
    
        
}

export default Landing