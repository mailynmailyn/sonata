import logo from './assets/logo_cropped.svg'
import classes from './styles/LoginPage.module.scss'
import icon from './assets/phone_icon.svg'

function LoginPage() {
  return (
    <div className={classes.gridContainer}>
      <div className = {classes.gridContainer__login}> 
        <img src={logo} className={classes.gridContainer__login__logo} alt="logo" />
        <h1 className={classes.gridContainer__login__title}>sonata</h1>
        <form className={classes.gridContainer__login__form}>
          <input type="text" className={classes.gridContainer__login__form__input} placeholder="username or email"></input>
          <input type="text" className={classes.gridContainer__login__form__input} placeholder="password"></input>
          <input type="submit" className={classes.gridContainer__login__form__login} value="login"></input>
        </form>
      </div>
      <div className = {classes.gridContainer__signUp}> 
        <img src={icon} className={classes.gridContainer__signUp__phoneIcon} alt="icon" />
        <h2 className={classes.gridContainer__signUp__header1}>Don't Have An Account?</h2>
        <h3 className={classes.gridContainer__signUp__header2}>Get Started By Creating Your New Account</h3>
        <button type="button" className={classes.gridContainer__signUp__button}>register</button>
      </div>
    </div>
  );
}

export default LoginPage;