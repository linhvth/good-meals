import React from "react";
import { Container, Card } from "react-bootstrap";
import './AboutUs.scss';
import Timeline from "../elements/Timeline";
import OurValues from "../elements/OurValues";
import hero from '../images/aboutus_hero.jpg';
import PreLoader from "../elements/PreLoader";

const Hero = () => {
    return (
        <Card className = "hero">
            <Card.Img src = { hero } alt = { hero } responsive/>
            <div className="hero-text">
                <h1><strong>Good Meals</strong> {" "}</h1><br/>
                <div className = "spacing-40"></div>
                <p>Never waste time choosing what to cook</p>
            </div>   
        </Card>
    )
}
function AboutUs() {
    return (
        <div>
            <PreLoader />
            <div>
                <Hero />
                <Container>
                        <Timeline />
                        <OurValues />
                </Container>
            </div>  
        </div>             
    )
}

export default AboutUs