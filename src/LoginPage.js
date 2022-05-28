import Navbar from './assets/Navbar.js';
import logo from './assets/logo.svg'
import classes from './styles/LoginPage.module.scss'
import icon from './assets/phone_icon.svg'

function LoginPage() {
  return (
    <div className={classes.container}>
      <Navbar></Navbar>
      <div className={classes.gridContainer}>
          <div className = {classes.gridContainer__login}> 
          <img src={logo} className={classes.logo} alt="logo" />
          <h1>sonata</h1>
          <form className={classes.gridContainer__login__form}>
              <input type="text" id="username" name="username" value="username or email"></input>
              <input type="text" id="password" name="password" value="password"></input>
              <input type="submit" value="login"></input>
          </form>
          </div>

          <div className = {classes.gridContainer__signUp}> 
          <img src={icon} className={classes.phoneIcon} alt="icon" />
          <h2>Don't Have An Account?</h2>
          <h3>Get Started By Creating Your New Account</h3>
          <button type="button" className={classes.button}>register</button>
          </div>
      </div>
    </div>
  );
}

export default LoginPage;

/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload YOUR MOM.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={()=>alert('GAE')} variant='contained'> GET UR MOM'D </Button> 
      </header>
*/