import React from 'react'
import { Container } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'

import './fqa.scss'

const FQAs = () => {
    return (
        <Container className='py-5 my-3'>
            <div className='division'>
                <h6 className = 'title'>
                    Frequently Asked Question (FQA)
                </h6>
                
            </div>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What are the differences between the Free Plan and the Preminum Plan?</Accordion.Header>
                    <Accordion.Body>
                    <span>Free plan still let you access to basic features such as: articles, 
                    free pre-built meal plans,... <br></br>
                    Meanwhile, the Preminum plan let you 
                    access to features such as: Customize planning, Customize Suggestions,... </span>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>How can I make a subscription?</Accordion.Header>
                    <Accordion.Body>
                    Go to Account then Membership on your left hand side
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>How can I join the team?</Accordion.Header>
                    <Accordion.Body>
                    Send us your CV here: goodmeal.work@gmail.com
                    Email not created yet by the way
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}

export default FQAs