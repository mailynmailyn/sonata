import logo from './assets/logo_cropped.svg'
import classes from './styles/CreateAccPage.module.scss'

function CreateAccPage() {
  return (
    <div className={classes.gridContainer}>
      <div> 
        <img src={logo} className={classes.gridContainer__logo} alt="logo" />
      </div>
      <div className = {classes.gridContainer__createAcc}> 
        <h1 className = {classes.gridContainer__createAcc__header}>create account</h1>
        <form className={classes.gridContainer__createAcc__form}>
          <input type="text" className={classes.gridContainer__createAcc__form__input} value="email"></input>
          <input type="text" className={classes.gridContainer__createAcc__form__input} value="username"></input>
          <input type="text" className={classes.gridContainer__createAcc__form__input} value="password"></input>
          <input type="submit" className={classes.gridContainer__createAcc__form__button} value="register"></input>
        </form>
      </div>
    </div>
  );
}

export default CreateAccPage;