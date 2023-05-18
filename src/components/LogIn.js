import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Alert, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LogIn.scss';

import { useAuth } from '../contexts/AuthProvider';

function LogIn() {
    const emailRef = useRef();
    // const userRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [blankErrors, setBlankErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({})
    const history = useNavigate();

    let navigate = useNavigate();
    const routeSignUp = () => {
        let path = '/good-meals/sign-up';
        navigate(path);
    }

    const setField = (field, value) => {
        setForm( {
            ...form,
            [field]:value
        })

        if (!!blankErrors[field])
        setBlankErrors({
            ...blankErrors,
            [field]:null
        })
    }

    const blankErrorsValidation = () => {
        const {email, password} = form
        const newErrors = {}
        if (!email || email === '') newErrors.email = 'Please enter your email'
        if (!password || password === '') newErrors.password = 'Please enter your password'
        return newErrors
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const blankErrors = blankErrorsValidation()
        if (Object.keys(blankErrors).length > 0){
            setBlankErrors(blankErrors)
            console.log(blankErrors)
        }
        else {
            try {
                setError('')
                setLoading(true)
                await login(emailRef.current.value, passwordRef.current.value )
                history('/');
            } catch {
                setError('Incorrect username or password.')
            }
        }

        setLoading(false);
    }


    return (
        <>
        <Container style={{ width: '360px'}} className="pb-5 my-5 d-flex flex-column text-center">
            <h2 className="text-bold mb-4">Log In</h2>

            {error && <Alert variant="danger">{ error }</Alert>}

            <Form onSubmit={ handleSubmit } > 
                <Form.Group className='mb-4' controlId=''>
                    <Form.Control  
                        placeholder='Enter Username' 
                        type="username" 
                        id="username" 
                        ref={ emailRef }
                        autoComplete="off"
                        onChange={(e) => setField('email', e.target.value)}
                        value={ form.email }
                        isInvalid = { !!blankErrors.email}
                        // required
                    />
                    <Form.Control.Feedback type='invalid'>{ blankErrors.email }</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId=''>
                    <Form.Control 
                        type='password' 
                        placeholder='Password'
                        id="password"
                        ref={ passwordRef }
                        onChange={(e) => setField('password', e.target.value)}
                        isInvalid = {!!blankErrors.password}
                        value={ form.password }
                        // required 
                    />
                    <Form.Control.Feedback type='invalid'>{ blankErrors.password }</Form.Control.Feedback>
                </Form.Group>

                <p className="" class='msg'>Forgot your password? Click here to reset.</p>

                <Button diabled={ loading } variant='dark' type='submit' className="mb-3">
                    Log In
                </Button>

                <p className="mb-3">Or need an account?</p>

                <Button variant='dark' type='button' onClick={ routeSignUp }>
                    Sign Up
                </Button>

            </Form>
        </Container>
        {/* )} */}
        </>
    )
}

export default LogIn