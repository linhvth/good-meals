import React, { useEffect, useState } from "react"
import { Card, Container, Row, Col } from "react-bootstrap"
import { db } from '../firebase';
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import Dish from '../elements/Dish'
import { ClipLoader } from "react-spinners";
import PreLoader from "../elements/PreLoader";

function AllDishes () {
    const [dishes, setDishes] = useState([])

    useEffect(() => {
        const dishRef = collection(db, 'allDishes');
        getDocs(dishRef)
            .then((snapshot) => {
                const dishData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setDishes(dishData);
            });
    }, []);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
        { loading ? (<PreLoader />)
        : (
        <Container className="py-5 my-3">
            <Row> 
                <Container className="col-3">
                    <p>Placeholder for Filter</p>
                </Container>

                <Row className="col-9 d-flex flex-row justify-content-start" id='list-dishes'>
                    {dishes.map((dish) => 
                        <Col className='col-lg-4'>
                            <Dish 
                                title= { dish.Meal } 
                                category={ dish.Category } 
                                image={ dish.Image }
                            />
                        </Col>
                    )}
                </Row>
            </Row>
        </Container>
        )}
        </div>
    )
}

export default AllDishes