import React from "react";
import { useNavigate } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LogIn.scss'

import AuthContext from "../context/AuthProvider";
import { useRef, useState, useEffect, useContext } from 'react';
import axios from '../api/axios';

const LOGIN_URL = '/auth';

function LogIn() {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({ userName: user, passWord: pwd }),
            {
                headers: { 'Content-Type': 'application/json'},
                withCredentials: true
            }); 
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles; // should be an array
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        }
        catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    let navigate = useNavigate();
    const routeSignUp = () => {
        let path = '/sign-up';
        navigate(path);
    }

    return (
        <>
        { success ? (
            <Container>
                <p>You are logged in!</p>
                <br />
                <p><a href='/'>Go to Home.</a></p>
            </Container>
        ) : (
        <Container style={{ width: '360px'}} className="pb-5 my-5 d-flex flex-column text-center">
            <h2 className="text-bold mb-3">Log In</h2>
            <p ref={ errRef } className={ errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>
                { errMsg }
            </p>

            <Form onSubmit={ handleSubmit }>
                <Form.Group className='mb-4' controlId=''>
                    <Form.Control  
                        placeholder='Enter Username' 
                        type="username" 
                        id="username" 
                        ref={ userRef }
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={ user }
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId=''>
                    <Form.Control 
                        type='password' 
                        placeholder='Password'
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={ pwd }
                        required 
                    />
                </Form.Group>

                <p className="mb-3" class='msg'>Forgot your password? Click here to reset.</p>

                <Button variant='dark' type='submit' className="my-3">
                    Log In
                </Button>

                <p className="mb-3">Or</p>

                <Button variant='dark' type='button' onClick={ routeSignUp }>
                    Sign Up
                </Button>

            </Form>
        </Container>
        )}
        </>
    )
}

export default LogIn