import React from "react";
import { Container } from "react-bootstrap";

import './Dish.scss';

const Plan = ({ title, category, image }) => {
    return (
        <Container className="dish-container">
        <div className = "dish-card">
            <img className = "dish-img" src={ image } alt={ title }/>
        </div>
        <div className = "dish-body">
            <h5 className = "dish-title">
                <span className = "dish-title-text">{title} </span>
            </h5>
            <p className = "dish-cat">{category}</p>
        </div>
        </Container>
    )
}

export default Plan