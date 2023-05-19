import React from "react";
import { Container } from "react-bootstrap";

import './Dish.scss';
import dummy from '../images/chicken.jpg'

const Plan = ({ title, category, image }) => {
    const category_ = category.join(', ')

    return (
        <div className="pt-3 pb-5 d-flex justify-content-center">
        <div className="dish-container">
            <div className = "dish-card">
                <img className = "dish-img" src={ image } alt={ title } id="image"/>
            </div>
            <div className = "dish-body">
                <h6 className = "dish-title pt-3 text-wrap">
                    <span className = "dish-title-text">{title} </span>
                </h6>
                <p className = "dish-cat text-wrap">{ category_ }</p>
            </div>
        </div>
        </div>
    )
}

export default Plan