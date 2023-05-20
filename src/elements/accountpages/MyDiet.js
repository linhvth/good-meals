import React, { useState, useEffect, useCallback } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { db } from '../../firebase';
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import './MyDiet.scss'

const auth = getAuth();

export function DietContent() {
  const [ docRef, setDocRef ] = useState(null);
  const [ dietInfo, setDietInfo ] = useState({
    height: '',
    weight: '',
    dietType: '',
    allergies: '',
    healthCon: '',
    goal: '',
    fav: '',
    mealsNum: '',
  })

  const getData = useCallback(async () => {
    if (docRef) {
      const data = await getDoc(docRef);
      if (data.exists()) {
        setDietInfo({ ...data.data(), id: data.id });
      }
    }
  }, [docRef]);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDietInfo((prevDietInfo) => ({
      ...prevDietInfo,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Update the userInfo document in the database
    await updateDoc(docRef, dietInfo);
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
    { label: "HEIGHT", name: "height", value: dietInfo.height },
    { label: "WEIGHT", name: "weight", value: dietInfo.weight },
  ];

  const diet = [
    { label: "DIET TYPE", name: "dietType", value: dietInfo.dietType },
    { label: "ALLERGIES", name: "allergies", value: dietInfo.allergies },
    { label: "HEALTH CONDITIONS", name: "healthCon", value: dietInfo.healthCon },
  ];

  const preferences = [
    { label: "GOAL", name: "goal", value: dietInfo.goal },
    { label: "FAVORITE INGREDIENTS", name: "fav", value: dietInfo.fav },
    { label: "MEALS PER DAY", name: "mealsNum", value: dietInfo.mealsNum },
  ]

  return (
    <Container>
        <Form onSubmit={handleSubmit}>
            <h2 className="section-head">Personal Measurements</h2>
            <Form.Group className="mb-3">
                {measurements.map((field) => (
                    <Row className="info-row" key={field.name}>
                    <Col>
                        <Form.Label>{field.label}</Form.Label>
                        <Form.Control
                        type="text"
                        name={field.name}
                        value={field.value}
                        onChange={handleInputChange}
                        />
                    </Col>
                    </Row>
                ))}
            </Form.Group>
            <h2 className="section-head">Diet Information</h2>
            <Form.Group className="mb-3">
            {diet.map((field) => (
                <Row className="info-row" key={field.name}>
                <Col>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control
                    type="text"
                    name={field.name}
                    value={field.value}
                    onChange={handleInputChange}
                    />
                </Col>
                </Row>
            ))}
            </Form.Group>
            <h2 className="section-head">Preferences</h2>
            <Form.Group className="mb-3">
            {preferences.map((field) => (
                <Row className="info-row" key={field.name}>
                <Col>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control
                    type="text"
                    name={field.name}
                    value={field.value}
                    onChange={handleInputChange}
                    />
                </Col>
                </Row>
            ))}
            </Form.Group>
            <div className="d-flex justify-content-center">
            <Button type="submit" variant="primary">
                Save Changes
            </Button>
            </div>
      </Form>


    </Container>
  );
}

const MyDiet = () => {
    console.log('MyDiet component')
    return (
        <DietContent/>
    )

}

export default MyDiet