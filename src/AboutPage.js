import classes from './styles/AboutPage.module.scss'
import { Button } from '@mui/material'; //this is to import the button from material ui
import Navbar from './assets/Navbar.js';
import logo from './assets/logo_cropped.svg';


function AboutPage(){
    return(
        <div classname= "AboutPage">
            <header className= {classes.header}>
                <img src={logo} className={classes.header__img} alt="logo"/>
                <h1 className= {classes.header__title}> About Sonata </h1>
                <h2 className= {classes.header__subtitle}>  &#9834; Find your accompaniment &#9834; </h2>
            </header>
            <body className= {classes.body}>
                <p className= {classes.body__bodytext}> Music is a universal language. It is a vessel for unspoken emotions and understanding 
                that connects people across the world. Sonata works to join like-minded music lovers based on their favourite genres. 
                Whether it be a new friendship, romance or way to discover more music, a beautiful sonata is played when a soloist 
                unites with their perfect accompaniment. </p>
                <h2 className= {classes.header__subtitle}>  &#9835; </h2>
            </body>
    
        </div>
    )
}

export default AboutPage;
