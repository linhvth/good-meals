import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Timeline.scss';

const Timeline = () => {
    return (
        <Container className='py-5 my-3'>
            <div className = 'title'>
                About Us
                <p className='description py-4'>
                At Good Meals, we believe in the power of good food to bring people together. 
                Our mission is to make meal planning simple and enjoyable by providing our users 
                with a wide variety of delicious and healthy recipes.
                We are committed to promoting sustainable and ethical practices in the food industry. 
                </p>
            </div>
            <Row className = "row-timeline">
                <Col className = "col-timeline">    
                    <ul className = "timeline">
                        <li className = "timeline-item">
                            <h5 className = "timeline-year" style={{color: ('#FEAC5D')}}>2020</h5>
                            <p className='description-timeline'>
                            <strong>Good Meals</strong> launched its first meal planning service. 
                            This service offered customized meal plans to customers based on 
                            their dietary preferences and health goals. This was a major step for 
                            the company in providing personalized and healthy meal solutions 
                            to its customers.
                            </p> 
                        </li>
                        <li className = "timeline-item">
                            <h5 className = "timeline-year" style={{color: ('#1D828E')}}>2021</h5>
                            <p className='description-timeline'>
                            <strong>Good Meals</strong> introduced a new line of ready-to-eat meals, 
                            making it even easier for customers to enjoy healthy and delicious meals 
                            without the hassle of cooking. These meals were carefully crafted by 
                            <strong> Good Meals’</strong> team of chefs and nutritionists to provide 
                            balanced and satisfying options for busy individuals and families.
                            </p> 
                        </li>
                        <li className = "timeline-item">
                            <h5 className = "timeline-year" style={{color: ('#FEAC5D')}}>2022</h5>
                            <p className='description-timeline'>
                            Formed partnerships with local farmers and producers to source fresh, 
                            seasonal ingredients for its meal plans. This move further enhanced 
                            the quality and sustainability of <strong>Good Meals’</strong> offerings 
                            and demonstrated the company’s commitment to supporting local communities 
                            and promoting sustainable food practices.
                            </p> 
                        </li>
                        <li className = "timeline-item">
                            <h5 className = "timeline-year" style={{color: ('#1D828E')}}>2023</h5>
                            <p className='description-timeline'>
                            In 2023, <strong>Good Meals</strong> aim to reach a major milestone of 
                            serving over 1 million customers. This achievement solidified the company’s 
                            position as a leading provider of healthy meal planning solutions and 
                            demonstrated the strong demand for its services.
                            </p> 
                        </li>
                    </ul>    
                </Col>
            </Row>
        
        </Container>
    )
}

export default Timeline