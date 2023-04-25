import React  from "react";
import { Carousel} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './Slider.scss';

import background from '../images/home_background.jpg';
import slider1 from '../images/slider1.jpg';
import slider2 from '../images/slider2.jpg';

function Slider() {
    const navigation = useNavigate();
    const navigateTo = () => navigation('../plans');

    return (
        <Carousel variant = "dark">
            <Carousel.Item data-bs-interval="50">
                <img className ="carousel-control" src = { slider1 } alt = { slider1 } responsive/>
                <h1 className="background_text">
                    Welcome back! How are you doing? <br/>
                <div className = "spacing-40"></div>
                    Craft your plan now with <strong>Good Meals!</strong>
                <div className='division'>
                    <button className='still' onClick = {navigateTo}>
                    My Plans               
                    </button>          
                </div>
                </h1>
            </Carousel.Item>
            <Carousel.Item data-bs-interval="50">
                <img className ="carousel-control" src = { background } alt = { background } responsive/>
                <h1 className="background_text">
                    Haven't got your own plans yet? <br/>
                <div className = "spacing-40"></div>
                    Browse to see what we can offer!
                <div className='division'>
                    <button className='still' onClick = {navigateTo}>
                    Our Plans               
                    </button>          
                </div>
                </h1>
            </Carousel.Item>
            <Carousel.Item data-bs-interval="50">
                <img className ="carousel-control" src = { slider2 } alt = { slider2 } responsive/>
                <h1 className="background_text">
                    Have no idea what to eat today? <br/>
                <div className = "spacing-40"></div>
                    Discover our popular dishes now!
                <div className='division'>
                    <button className='still' onClick = {navigateTo}>
                    Browse More Dishes            
                    </button>          
                </div>
                </h1>
            </Carousel.Item>
        </Carousel>
            
    )
    
        
}

export default Slider