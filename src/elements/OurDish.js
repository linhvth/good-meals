import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Dish from './Dish';
import './OurDish.scss'

import chicken from '../images/chicken.jpg'

const OurDishes = () => {
    const navigation = useNavigate();
    const navigateTo = () => navigation('../all-dishes');

    return (
        <Container className='py-5 my-3'>
        <div className = 'title'>
            Popular Dishes
            <p className='description'>
            A feature of our most loved and highly-rated meals that are both 
            delicious and nutritious. Made with fresh, wholesome ingredients and 
            packed with essential vitamins and minerals, these dishes are the perfect 
            way to nourish your body and satisfy your taste buds. Try one of our 
            popular healthy dishes today and discover how delicious eating well can be!
            </p>
        </div>
        <Row>
            <Col>
            <Dish title= "Healthy chicken katsu curry" category="Main course" image={ chicken }/>
            </Col>
            <Col>
            <Dish title= "Healthy chicken katsu curry" category="Main course" image={ chicken }/>
            </Col>
            <Col>
            <Dish title= "Healthy chicken katsu curry" category="Main course" image={ chicken }/>
            </Col>
        </Row>
        <div className='division'>
            Or
            <div>
            <button className='still' onClick = {navigateTo}>
                Browse More Dishes            
            </button>
            </div>
        </div>
        </Container>
    )
}

export default OurDishes