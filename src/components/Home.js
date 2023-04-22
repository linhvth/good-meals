import React from "react";
<<<<<<< HEAD
import { Container } from "react-bootstrap";
import './Home.scss'
import background from "../images/home_background.jpg";
import { Card } from "react-bootstrap/esm";
=======
import { Container, Card } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

import OurPlans from "../elements/OurPlans";
import OurDishes from "../elements/OurDish";
import Articles from "../elements/Articles";

import background from '../images/slide.jpg';
>>>>>>> 364e23c8b8a56c4adc02adee0e9577baf184c932

function Home() {
    // const navigation = useNavigate();
    // const navigateTo = () => navigation('/LogIn');

    return (
<<<<<<< HEAD
        <Container fluid className="p-0">
            <Card className="home_background">
                <img className ="background" src = { background } alt = {background} responsive/>
                <h1 className="background_text">
                    Customize your diet with selection from thousands of dishes <br/>
                    Meal planning has never been easier with Good Meals!
                </h1>
            </Card>
=======
        <Container className="py-5 my-3">
            <Container fluid className="p-0">
                <Card className="home_background">
                    <img class ="background" src = { background } alt = { background } responsive/>
                </Card>
            </Container>
            <OurPlans/>
            <OurDishes/>
            <Articles/>
>>>>>>> 364e23c8b8a56c4adc02adee0e9577baf184c932
        </Container>
    )
}

export default Home