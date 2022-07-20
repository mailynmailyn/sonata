import {Col} from 'react-bootstrap';
import classes from './styles/Profile.module.scss';


// import { Button } from '@mui/material'; //this is to import the button from material ui
import Navbar from './assets/Navbar.js';
import logo from './assets/logo_cropped.svg';
// import { Profiler } from 'react';


function Profile({currentProfile, onEditGenresClicked, onEditProfileClicked}){
    return(
        <Col className = "GenreSelection">
            <body className = {classes.body}>
                <div className = {classes.grid}>
                    <div>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div>
                        <h1 className = {classes.body__title}>{currentProfile.username} </h1>
                        <h5 className = {classes.body__bio}> {currentProfile.bio} </h5>
                        <button onClick = {() => onEditProfileClicked()}> edit profile </button>
                    </div>
                </div>
                <h2 className = {classes.body__subtitle}> favourite genres </h2>
                <div className = {classes.secondaryGrid}>
                    <div className = {classes.genreGrid}>
                        {currentProfile.genres.map((genre) => ( 
                            <button type="button" className={classes.body__genreButton}> {genre} </button>
                        ))}
                    </div>
                    <button onClick = {() => onEditGenresClicked()}> edit genres </button>
                </div>
            </body>
        </Col>
    )
}

export default Profile;