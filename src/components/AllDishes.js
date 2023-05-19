import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { db } from '../firebase';
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import Dish from '../elements/Dish'
import PreLoader from "../elements/PreLoader";

function AllDishes () {
    const [dishes, setDishes] = useState([])

    useEffect(() => {
        const dishRef = collection(db, 'allDishes');
        onSnapshot(query(dishRef, orderBy("Meal")), (snapshot) => {
            const dishData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setDishes(dishData);
        })
    }, []);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    console.log(dishes)

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
                                slug={ dish.unique_url }
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