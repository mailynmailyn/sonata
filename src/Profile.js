import classes from './styles/Profile.module.scss'
import { Button } from '@mui/material'; //this is to import the button from material ui
import Navbar from './assets/Navbar.js';
import logo from './assets/logo_cropped.svg';
import { Profiler } from 'react';


function Profile(){
    return(
        <div className = "GenreSelection">
            <Navbar></Navbar>
            <body className = {classes.body}>
                <div className = {classes.grid}>
                    <img src={logo} className = {classes.body__img} alt="logo"/>
                    <div>
                        <h1 className = {classes.body__title}> username </h1>
                        <h5 className = {classes.body__bio}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </h5>
                    </div>
                </div>
                <h2 className = {classes.body__subtitle}> favourite genres </h2>
                <div className = {classes.grid}>
                    <div className = {classes.genreGrid}>
                        <button type="button" className={classes.body__genreButton}> shoegaze </button>
                        <button type="button" className={classes.body__genreButton}> pop </button>
                        <button type="button" className={classes.body__genreButton}> folk </button>
                        <button type="button" className={classes.body__genreButton}> alternative </button>
                        <button type="button" className={classes.body__genreButton}> electronic </button>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default Profile;