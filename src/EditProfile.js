import classes from './styles/EditProfile.module.scss';
import Navbar from './assets/Navbar.js';
import logo from './assets/logo_cropped.svg';

function EditProfile({onEditProfile, currentProfile}){
    
    const passNewBio = (bio) => {
        console.log(bio); //edit genres, passed into bigfunction 
        
    }


    return(
        <div classname= "EditProfile">
            <header className= {classes.header}>
                <h1 className= {classes.header__title}> edit profile </h1>
            </header>
            <body className= {classes.body}>
                <div className = {classes.grid}>
                    <div>
                    <div className= {classes.card}>
                        <img src={logo} className= {classes.card__img} alt="logo"/>     
                    </div>
                    <form className= {classes.body__pfp__file} action="/action_page.php">
                            <label for="myfile">Select a profile picture:  </label>
                            <input type="file" id="myfile" name="myfile"></input>
                    </form>
                    </div>
                    <div>
                        <form>
                            <textarea id = "bio" className= {classes.body__bio} defaultValue= {currentProfile.bio}></textarea>
                        </form>
                    </div>
                </div>  
                <div>
                    <button type="button" className={classes.body__button} onClick={() => onEditProfile(document.getElementById('bio').value)}> save changes </button>
                </div>  
            </body>
        </div>
    )
}

export default EditProfile;