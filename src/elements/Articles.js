import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

import article from '../images/article_img.jpg';
import './Articles.scss'

export const articleName = (props) => {
    return (
        <div>
            <p >{props.content}</p>
        </div>
    )
}

const Articles = () => {
    return (
        <Container className='py-5 my-3'>
            <div className='division'>
                <h5 className = 'title'>Articles</h5>
                <p className='description'>
                Get updated with informative and engaging content to help you plan 
                and prepare healthy and delicious meals. From nutrition news and 
                trends to expert tips and advice, our articles cover a wide range 
                of topics. Whether you are looking for quick recipes, meal prep ideas, 
                or information on special diets, our article section has something for everyone.
                </p>
            </div>
            <Row>
                <Col className = "image-col">
                    <img className = 'article' src = { article } alt= 'This is an article' responsive>
                    </img>
                </Col>
                <Col className = "titles-col">
                    <Row>
                        <articleName content = "10 ways to eat healthier">
                        </articleName>
                    </Row>
                    <>
                    </>
                </Col>
            </Row>
        </Container>
    )
}

export default Articles