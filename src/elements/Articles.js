import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import article from '../images/article_img.jpg';
import './Articles.scss'

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
            <Row className='py-5'>
                <Col className = "image-col col-6">
                    <img src = { article } alt= 'This is an' className='w-100 article-img'>
                    </img>
                </Col>
                <Col className = "titles-col col-6">
                    <Row>
                        
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Articles