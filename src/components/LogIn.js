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
    const [loading, setLoading] = useState(false);
    const history = useNavigate();
    
    let navigate = useNavigate();
    const routeSignUp = () => {
        let path = '/sign-up';
        navigate(path);
    }
    

    async function handleSubmit(e) {
        e.preventDefault();

        if (!emailRef.current.value || emailRef.current.value === '') {
            setError('Username must not be a blank');
        }
        else if (!passwordRef.current.value || passwordRef.current.value === ''){
            setError('Password must not be a blank')
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

            setLoading(false);
        }
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
                        // onChange={(e) => setUser(e.target.value)}
                        // value={ user }
                        // required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId=''>
                    <Form.Control 
                        type='password' 
                        placeholder='Password'
                        id="password"
                        ref={ passwordRef }
                        // onChange={(e) => setPwd(e.target.value)}
                        // value={ pwd }
                        // required 
                    />
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