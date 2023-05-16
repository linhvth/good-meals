import React, { useEffect, useState } from "react"
import { Card, Container } from "react-bootstrap"
import { db } from '../firebase';
import { doc, getDoc, collection, getDocs } from "firebase/firestore";


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
    // console.log(dishes)

    return (
        <Container className="py-5 my-3">
            {dishes.map(dish => 
                <Container> 
                    <p className="text-bold">{ dish.Meal }</p>
                    <p>{ dish.Description }</p>
                </Container>
            )}
        </Container>
    )
}

export default AllDishes