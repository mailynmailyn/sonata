import classes from './styles/GenreSelection.module.scss'
import { Button } from '@mui/material'; //this is to import the button from material ui
import Navbar from './assets/Navbar.js';
import logo from './assets/logo_cropped.svg';
import Select from 'react-select';
import React, {useState} from "react";

function GenreSelection({onEditGenres}){

    const passGenres = (genres) => {
        const genreArray = [];
        console.log(genres); //edit genres, passed into bigfunction 
        genres.map((genre) => (
            genreArray.push(genre.value)
        ))
        
        console.log(genreArray);
        onEditGenres(genreArray);


    }

    const [selectedOptions, setSelectedOptions] = useState();

    function handleSelect(data) {
        setSelectedOptions(data);
      }

    const options = [
        { value: 'rock', label: 'Rock' },
        { value: 'indie', label: 'Indie' },
        { value: 'r&b', label: 'R&B' },
        { value: 'classical', label: 'Classical' },
        { value: 'jazz', label: 'Jazz' },
        { value: 'shoegaze', label: 'Shoegaze' },
        { value: 'pop', label: 'Pop' },
        { value: 'folk', label: 'Folk' },
        { value: 'rap', label: 'Rap' },
        { value: 'electronic', label: 'Electronic' }
      ]


    return(
        <div className = "GenreSelection">
            <header className= {classes.header}>
                <img src={logo} className= {classes.header__img} alt="logo"/>
                <h1 className= {classes.header__title}> hello user, what are your favourite genres of music? </h1>
                <img src={logo} className= {classes.header__img} alt="logo"/>
            </header>
            <body className = {classes.body}>
                <div className = {classes.body__search}>
                    <Select placeholder= "Search" options={options} value={selectedOptions} onChange={handleSelect} isMulti/>
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

                    <button type="button" className={classes.grid__genreButton}> rap </button>
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
                    <button type="button" className={classes.body__button} onClick={() => passGenres(selectedOptions)}> continue </button>
                </div>
            </body>

        </div>
    )
}

export default GenreSelection;
