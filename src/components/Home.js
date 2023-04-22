import React from "react";
import { Container } from "react-bootstrap";
import './Home.scss'
import background from "../images/home_background.jpg";
import { Card } from "react-bootstrap/esm";

function Home() {
    return (
        <Container fluid className="p-0">
            <Card className="home_background">
                <img class ="background" src = { background } alt = {background} responsive/>
            </Card>
        </Container>
    )
}

export default Home