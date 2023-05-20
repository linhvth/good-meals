import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { db } from '../firebase'
import { collection, onSnapshot, query, orderBy, where } from "firebase/firestore";
import { Container, Card } from "react-bootstrap"
import './Recipe.scss'
import PreLoader from "../elements/PreLoader";

const PageRecipe = ({ dish }) => {
    Object.entries(dish['Cooking guide']).map(([step, howto]) => {
        console.log(step, howto)
    });

    return (
        <div className='w-100'>
            <Card className="home-background">
            <img className ="cover" src = { dish.Image } id='recipe-cover' responsive/>
            </Card>
            <Container className='px-5'>
                <h1 className='text-bold pt-5 pb-3 text-center'>{ dish.Meal }</h1>
                <div className='py-2'>
                    <h4 className='pb-2'>Description</h4>
                    <p>{ dish.Description }</p>
                </div>

                <div className='py-2'>
                    <h4 className='pb-2'>Ingredients</h4>
                    <ul>
                    {dish['Main Ingredient'].map((ingredient) =>
                        <li>{ ingredient }</li>
                    )}
                    </ul>
                </div>

                <div className='py-2'>
                    <h4 className='pb-2'>How to cook</h4>
                    <ul>
                        {Object.entries(dish['Cooking guide']).map(([step, howto]) => 
                            <li>{ step }: { howto }</li>
                        )}
                    </ul>
                </div>

                <div className='text-center py-5'>
                    <h3>Similar Dishes</h3>
                </div>
            </Container>
        </div>
    )
}

function Recipe () {
    let { slug } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const dishRef = collection(db, 'allDishes');
        console.log(slug)
        onSnapshot(query(dishRef, orderBy("Meal"), where('unique_url', '==', slug)), (snapshot) => {
            const dishData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setData(dishData);
        })
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
            <div>
            {data.map((dish) => 
                <PageRecipe dish={ dish } />
            )}
            </div>
            )}
        </div>
    )
}

export default Recipe;