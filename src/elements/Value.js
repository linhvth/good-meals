import React from "react";
import { Container } from "react-bootstrap";
import './Value.scss';

const Value = ({ title, description, image }) => {
    return (
        <Container className="value-container">
        <div className = "value-card">
            <img className = "value-img" src={ image } alt={ title }/>
            <h5 className = "value-title">
                <span className = "value-title-text">{title} </span>
            </h5>
        </div>
        <div className = "value-body">
                <p className = "value-des">{description}</p>
        </div>
        </Container>
    )
}

export default Plan