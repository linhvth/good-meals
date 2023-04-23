import React from "react";
import { Container, Card } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

import OurPlans from "../elements/OurPlans";
import OurDishes from "../elements/OurDish";
import Articles from "../elements/Articles";

import image from '../images/slide.jpg';
import './Home.scss'

function Home() {
    // const navigation = useNavigate();
    // const navigateTo = () => navigation('/LogIn');

    return (
        <div>
        <Container fluid className="p-0">
            <Card className="home_background">
                <img class ="background" src = { image } alt = { image } responsive='true'/>
            </Card>
        </Container>
        <Container className="py-5 my-3">
            <OurPlans/>
            <OurDishes/>
            <Articles/>
        </Container>
        </div>
    )
}

export default Home