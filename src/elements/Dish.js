import React from "react";
import { Container } from "react-bootstrap";

import './Dish.scss';
import dummy from '../images/chicken.jpg'

const Plan = ({ title, category, image }) => {
    const category_ = category.join(', ')

    return (
        <Container className="dish-container">
        <div className = "dish-card">
            <img className = "dish-img" src={ image } alt={ title } id="image"/>
        </div>
        <div className = "dish-body">
            <h6 className = "dish-title p-1">
                <span className = "dish-title-text">{title} </span>
            </h6>
            <p className = "dish-cat pt-1">{ category_ }</p>
        </div>
        </Container>
    )
}

export default Plan