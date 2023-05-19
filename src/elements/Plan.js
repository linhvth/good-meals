import React from "react";
import { Container } from "react-bootstrap";
import './Plan.scss';

const Plan = ({ title, description, image }) => {
    return (
        <div className="pt-3 pb-5 d-flex justify-content-center">
            <div className="plan-container d-flex flex-column">
                <div className = "plan-card">
                    <img className = "plan-img" src={ image } alt={ title }/>
                    <h5 className = "plan-title">
                        <span className = "plan-title-text">{title} </span>
                    </h5>
                </div>
                <div className = "plan-body">
                        <p className = "plan-des">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Plan