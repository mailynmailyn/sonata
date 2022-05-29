import classes from './styles/GenreSelection.module.scss'
import { Button } from '@mui/material'; //this is to import the button from material ui
import Navbar from './assets/Navbar.js';
import logo from './assets/logo_cropped.svg';

function GenreSelection(){
    return(
        <div className = "GenreSelection">
            <Navbar></Navbar>
        </div>
    )
}

export default GenreSelection;
