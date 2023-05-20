import React, { useState, useEffect, useCallback } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { db } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import './MyDiet.scss'

const auth = getAuth();

export function DietContent() {
  const [ docRef, setDocRef ] = useState(null);
  const [ savedInfo, setSavedInfo ] = useState({
    bookmarks: []
  })

  const getData = useCallback(async () => {
    if (docRef) {
      const data = await getDoc(docRef);
      if (data.exists()) {
        setSavedInfo({ ...data.data(), id: data.id });
      }
    }
  }, [docRef]);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSavedInfo((prevSavedInfo) => ({
      ...prevSavedInfo,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Update the userInfo document in the database
    await updateDoc(docRef, savedInfo);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const curruid = user.uid;
        setDocRef(doc(db, 'userInfo', curruid));
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    getData();
  }, [docRef, getData])

  const measurements = [
    { label: 'Saved Dishes', name: "savedDish", value: savedInfo.savedDish },
  ]


  return (
    <Container>
        <h2 className="section-head">Bookmarked Dishes</h2>



    </Container>
  );
}

const Bookmarks = () => {

}

export default Bookmarks;