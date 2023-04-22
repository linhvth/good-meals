import React from "react";
import { Container } from "react-bootstrap";
import './Home.scss'
import background from "../images/home_background.jpg";
import { Card } from "react-bootstrap/esm";

function Home() {
    return (
        <Container fluid className="p-0">
            <Card className="home_background">
                <img className ="background" src = { background } alt = {background} responsive/>
                <h1 className="background_text">
                    Customize your diet with selection from thousands of dishes <br/>
                    Meal planning has never been easier with Good Meals!
                </h1>
            </Card>
        </Container>
    )
}

export default Home