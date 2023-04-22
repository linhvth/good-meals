import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Articles = () => {
    return (
        <Container className='py-5 my-3'>
            <div className='division'>
                Articles
                <p className='description'>
                Get updated with informative and engaging content to help you plan 
                and prepare healthy and delicious meals. From nutrition news and 
                trends to expert tips and advice, our articles cover a wide range 
                of topics. Whether you are looking for quick recipes, meal prep ideas, 
                or information on special diets, our article section has something for everyone.
                </p>
            </div>
            <Row>
                <Col>
                    <img>
                    </img>
                </Col>
                <Col>
                    <Row>
                        
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Articles