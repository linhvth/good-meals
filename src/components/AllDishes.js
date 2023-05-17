import React, { useEffect, useState } from "react"
import { Card, Container } from "react-bootstrap"
import { db } from '../firebase';
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import Dish from '../elements/Dish'

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

    return (
        <Container className="py-5 my-3">
            {dishes.map((dish) => 
                <Container> 
                    <Dish title= { dish.Meal } category={ dish.Category } image={ dish.Image }/>
                </Container>
            )}
        </Container>
    )
}

export default AllDishes