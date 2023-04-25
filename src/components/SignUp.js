import React, { useRef, useState } from "react";
import { Container, Alert } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

import { useAuth } from '../contexts/AuthProvider';

// import { useNavigate } from 'react-router-dom';


function SignUp() {
    const emailRef = useRef();
    const userRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth(); // , currUser if needed
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match.')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value )
        } catch {
            setError('Failed to creat an account.')
        }

        setLoading(false);
    }

    return (
        <Container style={{ width: '360px'}} className="pb-5 mt-5 d-flex flex-column text-center">
            <h2 className="text-bold mb-4 mt-2">Sign Up</h2>
            {/* <p ref={ errRef } className={ errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>
                { errMsg }
            </p> */}
            {/* {JSON.stringify(currUser)} */} 
            {error && <Alert variant="danger">{ error }</Alert>}

            <Form onSubmit={ handleSubmit } > 
                <Form.Group className='mb-4' controlId=''>
                    <Form.Control  
                        placeholder='Email Address' 
                        type="userEmail" 
                        id="userEmail" 
                        ref={ emailRef }
                        autoComplete="off"
                        // onChange={(e) => setUser(e.target.value)}
                        // value={ user }
                        required
                    />
                </Form.Group>

                <Form.Group className='mb-4' controlId=''>
                    <Form.Control  
                        placeholder='Username' 
                        type="username" 
                        id="username" 
                        ref={ userRef }
                        autoComplete="off"
                        // onChange={(e) => setUser(e.target.value)}
                        // value={ user }
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId=''>
                    <Form.Control 
                        type='password' 
                        placeholder='Password'
                        id="password"
                        ref={ passwordRef }
                        // onChange={(e) => setPwd(e.target.value)}
                        // value={ pwd }
                        required 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId=''>
                    <Form.Control 
                        type='password' 
                        placeholder='Password Confirmation'
                        id="passwordConfirm"
                        ref={ passwordConfirmRef }
                        // onChange={(e) => setPwd(e.target.value)}
                        // value={ pwd }
                        required 
                    />
                </Form.Group>

                <Button disabled={ loading } variant='dark' type='submit' className="mt-3 mb-4">
                    Sign Up
                </Button>

                <p className="">
                    Already have an account? <Link to='/log-in' className="text-decoration-none">Sign in.</Link>
                </p>

            </Form>
        </Container>
    )
}

export default SignUp