import React, { useEffect } from "react";
import { preLoaderAnim } from '../elements/Animation'
import './PreLoader.scss'

const PreLoader = () => {
    useEffect(() => {
        preLoaderAnim();
    }, []);

    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Good Meals, </span>
                <span>Good Lifestyle.</span>
            </div>
        </div>
    )
}

export default PreLoader