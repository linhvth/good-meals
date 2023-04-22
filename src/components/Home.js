import React from "react";
import { Container, Card } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

import OurPlans from "../elements/OurPlans";
import OurDishes from "../elements/OurDish";
import Articles from "../elements/Articles";

import background from '../images/slide.jpg';

function Home() {
    // const navigation = useNavigate();
    // const navigateTo = () => navigation('/LogIn');

    return (
        <Container className="py-5 my-3">
            <Container fluid className="p-0">
                <Card className="home_background">
                    <img class ="background" src = { background } alt = { background } responsive/>
                </Card>
            </Container>
            <OurPlans/>
            <OurDishes/>
            <Articles/>
        </Container>
    )
}

export default Home