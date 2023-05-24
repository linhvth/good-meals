// 1. Load the current dishes from userInfo array
// 2. The dishes must contain a unique url, which our array already stored
// 3. Using this unique url, somehow retrieve back the data for that dish
// 4. Using the preloaded Dish component, upload the dish information
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { db } from '../../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, query, doc, getDocs, getDoc, where } from "firebase/firestore";

import Dish from '../Dish'
const auth = getAuth();

async function getUserFavoriteDishes(db, userId) {
    // Get the user's information from the userInfo collection
    const userInfoRef = doc(db, "userInfo", userId);
    const userInfoDoc = await getDoc(userInfoRef);
    const userInfo = userInfoDoc.data();
  
    // Get the slugs of the user's favorite dishes
    const favoriteDishSlugs = userInfo.savedDish;
  
    // Query the dishesInfo collection to retrieve information about the user's favorite dishes
    const dishesInfoRef = collection(db, "allDishes");
    const q = query(dishesInfoRef, where("unique_url", "in", favoriteDishSlugs));
    const querySnapshot = await getDocs(q);
    const dishes = querySnapshot.docs.map(doc => doc.data());
  
    return dishes;
}

const Bookmarks = () => {
    const [ userId, setUserId ] = useState(null);
    const [ dishes, setDishes ] = useState([])
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setUserId(user.uid);
          }
        });
    
        return () => unsubscribe();
      }, []);
    
      useEffect(() => {
        if (userId) {
          getUserFavoriteDishes(db, userId).then(setDishes);
        }
      }, [userId]);
    console.log(dishes)
    return (
        <Container>
        <h2 className="section-head">My Saved Dishes</h2>
            <Container className = 'py-3'>
                <Row className="flex-row justify-content-start" id='list-dishes'>
                    {dishes.map((dish) => 
                        <Col className='col-lg-4' key={dish.slug}>
                            <Dish 
                                title= { dish.Meal } 
                                category={ dish.Category } 
                                image={ dish.Image }
                                slug={`/all-dishes/${dish.unique_url}` }
                            />
                        </Col>
                    )}
                </Row>
        </Container>
    </Container>
    )
}

export default Bookmarks;