import React, { useRef, useState } from "react";
import { Container, Alert } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";

import { db } from '../firebase';
import { useAuth } from '../contexts/AuthProvider';
import { AuthErrorCodes } from "firebase/auth";

import './SignUp.scss';
import { serverTimestamp, setDoc, doc } from "firebase/firestore";

function SignUp() {
    const emailRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const { signup } = useAuth(); // , currUser if needed
    const [ error, setError ] = useState('');
    const [ errors, setErrors ] = useState({});
    const [ form, setForm ] = useState({});
    const [loading, setLoading] = useState(false);

    let navigate = useNavigate();

    const setField = (field, value) => {
        setForm( {
            ...form,
            [field]:value
        })

        if (!!errors[field])
        setErrors({
            ...errors,
            [field]:null
        })
    }

    const validateForm = () => {
        const { firstName, lastName, userEmail, password, passwordConfirm } = form
        const newErrors = {}

        if (!firstName || firstName === '') newErrors.firstName = 'Please enter your first name!'
        if (!lastName || lastName === '')   newErrors.lastName = 'Please enter your last name!'
        if (!userEmail || userEmail === '') newErrors.userEmail = 'Please enter a valid Email address!'
        
        if (!password || password === '')   {newErrors.password = 'Please enter a password!'
                                            newErrors.passwordConfirm = 'Please set up your password and confirm!'}

        else if (password.length < 6)       newErrors.password = 'Password must be at least 6 character.'
        
        if (passwordConfirm !== password && password) newErrors.passwordConfirm = 'Password does not match!'

        console.log(newErrors);
        return newErrors
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const formErrors = validateForm()
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            try {
                setError('')
                setLoading(true)
                const res = await signup(emailRef.current.value, passwordRef.current.value);
                await setDoc(doc(db, 'userInfo', res.user.uid), {
                    ...form,
                    timeStamp: serverTimestamp(),
                })  .then((re) => { alert("Successfully stored data"); 
                                    navigate('/my-account');
                        })
                    .catch((e) => { console.log(e.message); });

            } catch(signUpErr) {
                const error = {}
                if (signUpErr.code === AuthErrorCodes.EMAIL_EXISTS) {
                    error.userEmail = 'This email already exists!'
                    setErrors(error);
                } 
                else {
                    console.log(signUpErr);
                    setError('Failed to create an account.')
                }
            }

            setLoading(false);
        }
    }

    return (
        <Container style={{ width: '360px'}} className="pb-5 mt-5 d-flex flex-column">
            <h2 className="text-bold mb-4 mt-2 text-center">Sign Up</h2>
 
            {error && <Alert variant="danger">{ error }</Alert>}

            <Form onSubmit={ handleSubmit } id='signUpForm'> 
                <Form.Group className='mb-4'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control  
                        placeholder='First Name' 
                        type="firstName" 
                        id="firstName" 
                        ref={ firstNameRef }
                        value = { form.firstName }
                        onChange={(e) => setField('firstName', e.target.value)}
                        isInvalid={ !!errors.firstName }
                        autoComplete="off"
                    />
                    <Form.Control.Feedback type='invalid'>{ errors.firstName }</Form.Control.Feedback>
                </Form.Group>
                    
                    
                <Form.Group className='mb-4'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control  
                        placeholder='Last Name' 
                        type="lastName" 
                        id="lastName" 
                        ref={ lastNameRef }
                        value={ form.lastName }
                        onChange={(e) => setField('lastName', e.target.value)}
                        isInvalid={ !!errors.lastName }
                        autoComplete="off"
                    />
                    <Form.Control.Feedback type='invalid'>{ errors.lastName }</Form.Control.Feedback>
                </Form.Group>


                <Form.Group className='mb-4'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control  
                        placeholder='Email Address' 
                        type="userEmail" 
                        id="userEmail" 
                        ref={ emailRef }
                        value={ form.userEmail }
                        onChange={(e) => setField('userEmail', e.target.value)}
                        isInvalid={ !!errors.userEmail }
                        autoComplete="off"
                    />
                    <Form.Control.Feedback type='invalid'>{ errors.userEmail }</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type='password' 
                        placeholder='Password'
                        id="password"
                        ref={ passwordRef }
                        value={ form.password }
                        onChange={(e) => setField('password', e.target.value)}
                        isInvalid={ !!errors.password }
                        autoComplete="off"
                    />
                    <Form.Control.Feedback type='invalid'>{ errors.password }</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control 
                        type='password' 
                        placeholder='Password Confirmation'
                        id="passwordConfirm"
                        ref={ passwordConfirmRef }
                        value={ form.passwordConfirm }
                        onChange={(e) => setField('passwordConfirm', e.target.value)}
                        isInvalid={ !!errors.passwordConfirm }
                        autoComplete="off"
                    />
                    <Form.Control.Feedback type='invalid'>{ errors.passwordConfirm }</Form.Control.Feedback>
                </Form.Group>

                <div className="text-center">
                    <Button disabled={ loading } variant='dark' type='submit' className="mt-3 mb-4">
                        Sign Up
                    </Button>
                </div>
                

                <p className="text-center">
                    Already have an account? <Link to='/log-in' className="text-decoration-none">Sign in.</Link>
                </p>

            </Form>
        </Container>
    )
}

export default SignUp