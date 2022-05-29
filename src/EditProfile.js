import classes from './styles/EditProfile.module.scss';
import { Button } from '@mui/material'; //this is to import the button from material ui
import Navbar from './assets/Navbar.js';
import logo from './assets/logo_cropped.svg';

function EditProfile(){
    return(
        <div classname= "EditProfile">
            <Navbar></Navbar>
            <header className= {classes.header}>
                <h1 className= {classes.header__title}> edit profile </h1>
            </header>
            <body className= {classes.body}>
                <div className= {classes.body__pfp}>
                <img src={logo} className= {classes.body__img} alt="logo"/>
                <form className= {classes.body__pfp__file} action="/action_page.php">
                    <label for="myfile">Select a profile picture:  </label>
                    <input type="file" id="myfile" name="myfile"></input>
                    <br></br>
                </form>
                </div>
                <div className= {classes.body__bio}>
                    <form>
                        <input className= {classes.body_bio} type= 'text' id="bio" >
                        </input>
                    </form>
                </div>
                <div>
                    <button type="button" className={classes.body__button}> save changes </button>
                </div>
            </body>
        </div>
    )
}

export default EditProfile;