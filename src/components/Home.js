import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './Home.scss'
import Slider from "../elements/Slider";
import { useAuth } from "../contexts/AuthProvider"

// For Landing Page
import OurPlans from "../elements/OurPlans";
import OurDishes from "../elements/OurDish";
import Articles from "../elements/Articles";

import background from '../images/home_background.jpg';

const Hero = () => {
    const navigation = useNavigate();
    const toLogIn = () => navigation('../log-in');

    return (
        <Card className="home-background h-100">
            <img className ="background hero" src = { background } alt = { background } responsive/>
            <h1 className="background_text">
                Customize your diet with selection from thousands of dishes <br/>
                <div className = "spacing-40"></div>
                <p>Meal planning has never been easier with <strong>Good Meals!</strong></p>
                <div className='division'>
                    <button className='still' onClick = { toLogIn }>
                        Sign Up Now                
                    </button>          
                </div>
            </h1>
        </Card>
    )
}

function Home() {
    const { currUser } = useAuth();

    return (
        <>
            { currUser 
                ?
                    <Container fluid className="">
                        <Slider/>
                    </Container>
                :
                    <div>
                        <Hero />
                        <OurPlans />
                        <OurDishes />
                        <Articles />
                    </div>
            }
        </>
    )
    
        
}

export default Home