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
                <h1 className= {classes.header__title}> hello user, what are your favourite genres? </h1>
                <img src={logo} className= {classes.header__img} alt="logo"/>
            </header>
            <body>
                
            </body>

        </div>
    )
}

export default GenreSelection;
