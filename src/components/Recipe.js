import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { db } from '../firebase'
import { collection, onSnapshot, query, orderBy, where, arrayUnion, arrayRemove, doc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Container, Card } from "react-bootstrap"
import './Recipe.scss'
import PreLoader from "../elements/PreLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as fasBookmark } from '@fortawesome/free-solid-svg-icons'

const PageRecipe = ({ dish, slug }) => {
    const auth = getAuth();
    const [userId, setUserId] = useState(null);

    Object.entries(dish['Cooking guide']).map(([step, howto]) => {
        console.log(step, howto)
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setUserId(user.uid)
          }
        });
    
        return () => unsubscribe();
    }, [auth]);

    const [ isClicked, setIsClicked ] = useState(false);
    const handleBookmarkClick = async () => {
        if (userId) {
            const userInfoRef = doc(db, 'userInfo', userId)
            
            setIsClicked(!isClicked);
            if (isClicked) {
                await updateDoc(userInfoRef, {
                  savedDish: arrayRemove(slug)
                });
            } else {
                await updateDoc(userInfoRef, {
                  savedDish: arrayUnion(slug)
                });
            }
        }
    }

    return (
        <div className='w-100'>
            <Card className="home-background">
            <img className ="cover" src = { dish.Image } alt='' id='recipe-cover' responsive/>
            </Card>
            <Container className='px-5'>
                <h1 className='text-bold pt-5 pb-3 text-center'>{ dish.Meal }</h1>
                <div className='text-center py-2'>
                    { isClicked ?
                        <button 
                        className="bookmark-button"
                        onClick={handleBookmarkClick}>
                        <FontAwesomeIcon icon= { fasBookmark } className='me-2'/> Saved to bookmarks!
                        </button>
                        :
                        <button 
                            className="bookmark-button"
                            onClick={handleBookmarkClick}>
                            <FontAwesomeIcon icon= { faBookmark } className='me-2'/> Bookmark
                        </button>                        
                    }
                </div>
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
    }, [slug]);

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
                <PageRecipe dish={ dish } slug = { slug }/>
            )}
            </div>
            )}
        </div>
    )
}

export default Recipe;