import React, { useState, useEffect, useCallback } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { db } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import profile from '../../images/profile.jpg'
import './Settings.scss'

const auth = getAuth();

export function ProfileContent() {
  const [ docRef, setDocRef ] = useState(null);
  const [ userInfo, setUserInfo ] = useState({
    firstName: '',
    lastName: '',
    userEmail: '',
    phoneNumber: '',
    birthDate: '',
    location: '',
    userName: '',
    password: '',
    remindMeal: '',
    dishUpdate: '',
  })

  const getData = useCallback(async () => {
    if (docRef) {
      const data = await getDoc(docRef);
      if (data.exists()) {
        setUserInfo({ ...data.data(), id: data.id });
      }
    }
  }, [docRef]);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Update the userInfo document in the database
    await updateDoc(docRef, userInfo);
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

  const generalInfo = [
    { label: "FIRST NAME", name: "firstName", value: userInfo.firstName },
    { label: "LAST NAME", name: "lastName", value: userInfo.lastName },
    { label: "EMAIL ADDRESS", name: "userEmail", value: userInfo.userEmail },
    { label: "PHONE NUMBER", name: "phoneNumber", value: userInfo.phoneNumber },
    { label: "BIRTHDATE", name: "birthDate", value: userInfo.birthDate },
    { label: "LOCATION", name: "location", value: userInfo.location }
  ];

  const accountSetting = [
    { label: "USER NAME", name: "userName", value: userInfo.userName },
    { label: "PASSWORD", name: "password", value: userInfo.password },
    { label: "Remind me on daily meal", name: "remindMeal", value: userInfo.remindMeal },
    { label: "Send me updates on new dishes", name: "dishUpdate", value: userInfo.dishUpdate }
  ];

  return (
    <Container>
      <div id="profile-img">
        <img src={profile} alt="profile" className="w-100 h-100" />
      </div>

      <h2 className="section-head">General Info</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          {generalInfo.map((field) => (
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

      <h2 className="section-head">Account Setting</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          {accountSetting.map((field) => (
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

const Settings = () => {
  console.log('Hi there')
    return (
      <ProfileContent/>
    )
}


export default Settings    