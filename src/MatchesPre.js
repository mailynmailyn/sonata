import Navbar from './assets/Navbar.js';
import logo from './assets/logo_cropped.svg'
import classes from './styles/MatchesPre.module.scss'
import shape from './assets/matches.svg'

function MatchesPre({onMatchesClick}) {
  return (
    <div className={classes.container}>
        <img src={shape} className={classes.container__shape} alt="shape" />
        <div className={classes.container__content}>
          <img src={logo} className={classes.container__content__logo} alt="logo" />
          <h1 className={classes.container__content__title}>Your Matches</h1>
          <button type="button" className={classes.container__content__button}
          onClick={() => onMatchesClick()}>Find My Matches</button>
        </div>
    </div>
  );
}

export default MatchesPre;