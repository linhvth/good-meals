import React from "react";
import { Container } from "react-bootstrap";
import './Plan.scss';

const Plan = ({ title, description, image }) => {
    return (
        <Container className="plan-container">
        <div className = "plan-card">
            <img className = "plan-img" src={ image } alt={ title }/>
            <h5 className = "plan-title">
                <span className = "plan-title-text">{title} </span>
            </h5>
        </div>
        <div className = "plan-body">
                <p className = "plan-des">{description}</p>
        </div>
        </Container>
    )
}

export default Plan