import classes from './styles/GenreSelection.module.scss'
import { Button } from '@mui/material'; //this is to import the button from material ui
import Navbar from './assets/Navbar.js';
import logo from './assets/logo_cropped.svg';

function GenreSelection(){
    return(
        <div className = "GenreSelection">
            <Navbar></Navbar>
            <header className= {classes.header}>
                <img src={logo} className= {classes.header__img} alt="logo"/>
                <h1 className= {classes.header__title}> hello user, what are your favourite genres of music? </h1>
                <img src={logo} className= {classes.header__img} alt="logo"/>
            </header>
            <body className = {classes.body}>
                <div>
                    <input className = {classes.body__search} type="text" placeholder="Search.."></input>
                </div>
                
                <div className = {classes.grid}>
                    <button type="button" className={classes.grid__genreButton}> rock </button>
                    <button type="button" className={classes.grid__genreButton}> indie </button>
                    <button type="button" className={classes.grid__genreButton}> r and b </button>
                    <button type="button" className={classes.grid__genreButton}> classical </button>
                    <button type="button" className={classes.grid__genreButton}> jazz </button>
                   
                    <button type="button" className={classes.grid__genreButton}> shoegaze </button>
                    <button type="button" className={classes.grid__genreButton}> pop </button>
                    <button type="button" className={classes.grid__genreButton}> folk </button>
                    <button type="button" className={classes.grid__genreButton}> alternative </button>
                    <button type="button" className={classes.grid__genreButton}> electronic </button>

                    <button type="button" className={classes.grid__genreButton}> genre </button>
                    <button type="button" className={classes.grid__genreButton}> genre </button>
                    <button type="button" className={classes.grid__genreButton}> genre </button>
                    <button type="button" className={classes.grid__genreButton}> genre </button>
                    <button type="button" className={classes.grid__genreButton}> genre </button>

                    <button type="button" className={classes.grid__genreButton}> genre </button>
                    <button type="button" className={classes.grid__genreButton}> genre </button>
                    <button type="button" className={classes.grid__genreButton}> genre </button>
                    <button type="button" className={classes.grid__genreButton}> genre </button>
                    <button type="button" className={classes.grid__genreButton}> genre </button>

                    <button type="button" className={classes.grid__genreButton}> genre </button>
                    <button type="button" className={classes.grid__genreButton}> genre </button>
                    <button type="button" className={classes.grid__genreButton}> genre </button>
                    <button type="button" className={classes.grid__genreButton}> genre </button>
                    <button type="button" className={classes.grid__genreButton}> genre </button>

                </div>

                <div>
                    <button type="button" className={classes.body__button}> continue </button>
                </div>
            </body>

        </div>
    )
}

export default GenreSelection;
