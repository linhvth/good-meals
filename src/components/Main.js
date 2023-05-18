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
import MyAccount from '../elements/MyAccount';

const Main = () => {
    return (
        <Routes className='main container'>
            <Route path='/good-meals' Component={ Home } />
            <Route path='/good-meals/plans' Component={ Plans } />
            <Route path='/good-meals/all-dishes' Component={ AllDishes }/>
            <Route path='/good-meals/articles' Component={ Articles } />
            <Route path='/good-meals/plan' Component={ Plan } />
            <Route path='/good-meals/about-us' Component={ AboutUs } />
            <Route path='/good-meals/help' Component={ Help } />
            <Route path='/good-meals/log-in' Component={ LogIn } />
            <Route path='/good-meals/sign-up' Component={ SignUp } />
            <Route path='/good-meals/my-account' Component = { MyAccount } />
        </Routes>
    )
}

export default Main