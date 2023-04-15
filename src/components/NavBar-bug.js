import React, {Component} from "react"
import { NavLink } from 'react-router-dom'
import './NavBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-dark bg-dark py-4'>
        <div class='container-fluid mx-4'>
                <a class='navbar-brand' href='/'>Good Meals</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class='collapse navbar-collapse' id='navbarToggle'>
                    <div class='navbar-nav ms-auto'>
                        <NavLink to='/all-dishes' class='nav-item'>All Dishes</NavLink>
                        <NavLink to='/plans' class='nav-item'>Plans</NavLink>
                        <NavLink to='/articles' class='nav-item'>Articles</NavLink>
                        <NavLink to='/about-us' className='nav-item'>About Us</NavLink>
                        <NavLink to='/help' className='nav-item'>Help</NavLink>
                        <NavLink to='/log-in' className='nav-item'>Log In</NavLink>
                        <NavLink to='/sign-up' className='nav-item'>Sign Up</NavLink>
                    </div>
                </div>

                
                

                {/* <div class='col-10'>
                    <div class="collapse navbar-collapse my-auto px-2 justify-content-between" id="navbar">
                        <NavLink to='/about-us' className='nav-item'>About Us</NavLink>
                        <NavLink to='/help' className='nav-item'>Help</NavLink>
                        <NavLink to='/log-in' className='nav-item'>Log In</NavLink>
                        <NavLink to='/sign-up' className='nav-item'>Sign Up</NavLink>
                    </div>
                </div> */}
            {/* </div> */}

            {/* <div class='narbav search-bar ms-5'>
                <form class='d-flex form-inputs'>
                    <input class='form-control' type='search' placeholder='Search any dish...' aria-label='Search'/>
                    <div class='search-button'>
                        <button class='btn' type='submit'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div> 
                </form>
            </div> */}
    //     </div>
    // </nav>

    // <div class='topbar'>
    //     <div class='container-fluid m-0 p-0 align-items-center'>
    //         <div class='row'>
    //             <div class='col-1'>
    //                 <div class='toggle'>
    //                     <a href='/' class='vertical-center'>
    //                         <FontAwesomeIcon icon={faBars} />
    //                     </a>
    //                 </div>
    //             </div>

    //             <div class='col-md-2'>
    //                 <div class='logo'>
    //                     <a href='/' class='vertical-center'>Meal Planner</a>
    //                 </div>
    //             </div>  

    //             <div class='col-md-8 align-items-center'>
    //                 <div class='search-bar vertical-center ms-5'>
    //                     <form class='d-flex form-inputs vertical-center'>
    //                         <input class='form-control' type='search' placeholder='Search any dish...' aria-label='Search'/>
    //                         <div class='search-button'>
    //                             <button class='btn' type='submit'>
    //                                 <FontAwesomeIcon icon={faMagnifyingGlass} />
    //                             </button>
    //                         </div>
    //                         {/* <i class="bx bx-search"></i> */}
    //                     </form>
    //                 </div>
    //             </div> 

    //             <div class='col-sm-1'>
    //                 <div class='vertical-center'>Account</div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
}

export default NavBar