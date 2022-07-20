import classes from './styles/GenreSelection.module.scss'
import Navbar from './assets/Navbar.js';
import logo from './assets/logo_cropped.svg';
import Select from 'react-select';
import React, {useState} from "react";

function GenreSelection({onEditGenres, currentProfile}){

    const passGenres = (genres) => {
        const genreArray = [];
        console.log(genres); //edit genres, passed into bigfunction 
        genres.map((genre) => (
            genreArray.push(genre.value)
        ))
        
        console.log(genreArray);
        onEditGenres(genreArray);


    }

    const onGenreButton = (genre, select) => {
        const selectArray = [];
        
        if(select != null){
            select.map((s) => (
                selectArray.push(s.value)
            ))
        }
       

        if(selectArray.includes(genre) == false){
            selectedOptions.push({ value: genre, label: genre})
        }

        console.log(selectedOptions);
        
        handleSelect(selectedOptions);

    }

    const [selectedOptions = [], setSelectedOptions] = useState();

    function handleSelect(data) {
        setSelectedOptions(data);
      }

    const options = [
        { value: 'rock', label: 'rock' },
        { value: 'indie', label: 'indie' },
        { value: 'r and b', label: 'r and b' },
        { value: 'classical', label: 'classical' },
        { value: 'jazz', label: 'jazz' },
        { value: 'shoegaze', label: 'shoegaze' },
        { value: 'pop', label: 'pop' },
        { value: 'folk', label: 'folk' },
        { value: 'rap', label: 'rap' },
        { value: 'electronic', label: 'electronic' },
        { value: 'rap', label: 'rap' },
        { value: 'lofi', label: 'lofi' },
        { value: '2000s', label: '2000s' },
        { value: '90s', label: '90s' },
        { value: '80s', label: '80s' },
        { value: '70s', label: '70s' },
        { value: 'ballroom', label: 'ballroom' },
        { value: 'bedroom pop', label: 'bedroom pop' },
        { value: 'math rock', label: 'math rock' },
        { value: 'reggae', label: 'reggae' },
        { value: 'opera', label: 'opera' },
        { value: 'orchestral', label: 'orchestral' },
        { value: 'soundtrack', label: 'soundtrack' },
        { value: 'edm', label: 'edm' },
        { value: 'hyperpop', label: 'hyperpop' },
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
                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("rock", selectedOptions)}> rock </button>
                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("indie", selectedOptions)}> indie </button>
                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("r and b", selectedOptions)}> r and b </button>
                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("classical", selectedOptions)}> classical </button>
                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("jazz", selectedOptions)}> jazz </button>
                   
                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("shoegaze", selectedOptions)}> shoegaze </button>
                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("pop", selectedOptions)}> pop </button>
                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("folk", selectedOptions)}> folk </button>
                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("alternative", selectedOptions)}> alternative </button>
                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("electronic", selectedOptions)}> electronic </button>

                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("rap", selectedOptions)}> rap </button>
                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("lofi", selectedOptions)}> lofi </button>
                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("2000s", selectedOptions)}> 2000s </button>
                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("80s", selectedOptions)}> 80s </button>
                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("90s", selectedOptions)}> 90s </button>

                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("70s", selectedOptions)}> 70s </button>
                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("ballroom", selectedOptions)}> ballroom </button>
                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("bedroom pop", selectedOptions)}> bedroom pop </button>
                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("math rock", selectedOptions)}> math rock </button>
                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("reggae", selectedOptions)}> reggae </button>

                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("opera", selectedOptions)}> opera </button>
                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("orchestral", selectedOptions)}> orchestral </button>
                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("soundtrack", selectedOptions)}> soundtrack </button>
                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("edm", selectedOptions)}> edm </button>
                    <button type="button" className={classes.grid__genreButton} onClick={() => onGenreButton("hyperpop", selectedOptions)}> hyperpop </button>

                </div>

                <div>
                    <button type="button" className={classes.body__button} onClick={() => passGenres(selectedOptions)}> continue </button>
                </div>
            </body>

        </div>
    )
}

export default GenreSelection;
