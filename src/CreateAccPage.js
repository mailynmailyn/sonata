import logo from './assets/logo_cropped.svg'
import classes from './styles/CreateAccPage.module.scss'
import shape from './assets/createAcc.svg'

function CreateAccPage() {
  return (
    <div className={classes.container}>
      <img src={shape} className={classes.container__shape} alt="shape" />
      <div className={classes.container__gridContainer}>
        <div> 
          <img src={logo} className={classes.container__gridContainer__logo} alt="logo" />
        </div>
        <div className = {classes.container__gridContainer__createAcc}> 
          <h1 className = {classes.container__gridContainer__createAcc__header}>create account</h1>
          <form className={classes.container__gridContainer__createAcc__form}>
            <input type="text" className={classes.container__gridContainer__createAcc__form__input} placeholder="email"></input>
            <input type="text" className={classes.container__gridContainer__createAcc__form__input} placeholder="username"></input>
            <input type="text" className={classes.container__gridContainer__createAcc__form__input} placeholder="password"></input>
            <input type="submit" className={classes.container__gridContainer__createAcc__form__button} value="register"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccPage;