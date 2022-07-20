import classes from './styles/Profile.module.scss';
// import { Button } from '@mui/material'; //this is to import the button from material ui
import Navbar from './assets/Navbar.js';
import logo from './assets/logo_cropped.svg';
// import { Profiler } from 'react';

function Profile({currentProfile, onEditGenresClicked, onEditProfileClicked}){
    return(
        <div className = "GenreSelection">
            <body className = {classes.body}>
                <div>
                { currentProfile.id ==6 && <img className = {classes.card__img} src={logo} alt="logo"/>}
                { currentProfile.id !=6 && <img className = {classes.card__img} src={currentProfile.img} alt="logo"/>}
                </div>
                <div>
                    <h1 className = {classes.body__title}>{currentProfile.username} </h1>
                </div>
                <div className = {classes.body__title}>
                    <h5 className = {classes.body__bio}> {currentProfile.bio} </h5>
                </div>
                <div>
                { currentProfile.id ==6 && <button onClick = {() => onEditProfileClicked()}> edit profile </button> }
                </div>
                <h2 className = {classes.body__subtitle}> favourite genres </h2>
                <div className = {classes.secondaryGrid}>
                    <div className = {classes.genreGrid}>
                        {currentProfile.genres.map((genre) => ( 
                            <button type="button" className={classes.body__genreButton}> {genre} </button>
                        ))}
                    </div>
                    { currentProfile.id ==6 && <button onClick = {() => onEditGenresClicked()}> edit genres </button> }
                </div>
            </body>
        </div>
    )
}

export default Profile;