import React from "react";
import { Container } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

import OurPlans from "../elements/OurPlans";
import OurDishes from "../elements/OurDish";
import Articles from "../elements/Articles";

// import image from '../images/slide.jpg';

function Home() {
    // const navigation = useNavigate();
    // const navigateTo = () => navigation('/LogIn');

    return (
        <Container className="py-5 my-3">
            {/* <div>
                <img src = { image } alt = { image } fluid></img>
                <div>
                <button className='still' onClick = {navigateTo}>
                    Join Us Now        
                </button>
                </div>
            </div> */}
            <OurPlans/>
            <OurDishes/>
            <Articles/>
        </Container>
    )
}

export default Home