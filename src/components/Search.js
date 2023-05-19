import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from '../firebase'
import { collection, getDocs, onSnapshot, query, orderBy, where } from "firebase/firestore";
import { snap } from "gsap";

import { Container, Row, Col } from "react-bootstrap"
import Dish from '../elements/Dish'
import PreLoader from "../elements/PreLoader";

const Search = () => {
    const [data, setData] = useState([]);

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let thisQuery = useQuery();
    let search = thisQuery.get('dish');

    async function searchData () {
        const dishRef = collection(db, 'allDishes');

        try {
        await onSnapshot(query(dishRef, orderBy("Meal"), where('Tags', 'array-contains', search)), (snapshot) => {
            const dishData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setData(dishData);
        })
        } catch {
            setData([]);
        }
    }

    useEffect(() => {
        searchData();
    }, [search]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, []);

    const numDishes = Object.keys(data).length;

    return (
        <div>
        { loading ? (<PreLoader />)
        : (
        <Container className="py-5 my-3">
            { (numDishes === 0) ? (
                <p>No dish is found with: "{thisQuery.get('dish')}"</p>
            ) : (
            <Row> 
                <Container className="col-3">
                    <p>Placeholder for Filter</p>
                </Container>

                <Row className="col-9 d-flex flex-row justify-content-start" id='list-dishes'>
                    <p>We found {numDishes} dishes for the keyword <i>
                        "{thisQuery.get('dish')}"
                        </i>.
                    </p>
                    {data.map((dish) => 
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
            )}
        </Container>
        )}
        </div>
    )
}

export default Search;