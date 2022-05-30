import Navbar from './assets/Navbar.js';
import logo from './assets/logo.svg'
import classes from './styles/MatchesPre.module.scss'

function MatchesPre() {
  return (
    <div className={classes.container}>
        <Navbar></Navbar>
        <img src={logo} className={classes.logo} alt="logo" />
        <h1>Your Matches</h1>
        <button type="button" className={classes.button}>Find My Matches</button>
    </div>
  );
}

export default MatchesPre;