import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from './Home';
import AllDishes from './AllDishes';
import Plans from './Plans'
import Articles from './Articles'

import AboutUs from './AboutUs';
import Help from './Help';
import LogIn from './LogIn'
import SignUp from './SignUp';

import Plan from '../elements/Plan';

const Main = () => {
    return (
        <Routes className='main container'>
            <Route path='/' Component={ Home } />
            <Route path='#' Component={ Home } />
            <Route path='/plans' Component={ Plans } />
            <Route path='/all-dishes' Component={ AllDishes }/>
            <Route path='/articles' Component={ Articles } />
            <Route path='/plan' Component={ Plan } />
            <Route path='/about-us' Component={ AboutUs } />
            <Route path='/help' Component={ Help } />
            <Route path='/log-in' Component={ LogIn } />
            <Route path='/sign-up' Component={ SignUp } />
        </Routes>
    )
}

export default Main