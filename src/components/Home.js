import React from "react";
import { Container, Card } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

import OurPlans from "../elements/OurPlans";
import OurDishes from "../elements/OurDish";
import Articles from "../elements/Articles";

import background from '../images/slide.jpg';

function Home() {

    return (
        <Container fluid className="p-0">
            <Card className="home_background">
                <img class ="background" src = { background } alt = { background } responsive/>
                <h1 className="background_text">
                    Customize your diet with selection from thousands of dishes <br/>
                    Meal planning has never been easier with Good Meals!
                </h1>
            </Card>
            <OurPlans/>
            <OurDishes/>
            <Articles/>
        </Container>
            
    )
}

export default Home