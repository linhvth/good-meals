import React from "react"
import { HashRouter } from 'react-router-dom';
import { Fragment } from 'react';
import NavBar from './NavBar'
import Main from './Main'
import Footer from './Footer'

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';



function App() {
  return (
    <HashRouter>
      <Fragment>
        <NavBar />
        <Main /> {/* to add more Routes, go to Main.js */}
        <Footer />
      </Fragment>
    </HashRouter>
  );
}

export default App;
