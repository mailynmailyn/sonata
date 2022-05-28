import Navbar from './assets/Navbar.js';
import logo from './assets/logo.svg'
import classes from './styles/CreateAccPage.module.scss'

function CreateAccPage() {
  return (
    <div className={classes.container}>
      <Navbar></Navbar>
      <div className={classes.gridContainer}>
          <div> 
          <img src={logo} className={classes.logo} alt="logo" />
          </div>

          <div className = {classes.gridContainer__createAcc}> 
          <h1>create account</h1>
          <form className={classes.gridContainer__createAcc__form}>
              <input type="text" id="username" value="email"></input>
              <input type="text" id="username" value="username"></input>
              <input type="text" id="password" value="password"></input>
              <input type="submit" value="register"></input>
          </form>
          </div>
      </div>
    </div>
  );
}

export default CreateAccPage;