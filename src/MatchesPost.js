import Navbar from './assets/Navbar.js';
import logo from './assets/logo.svg';
import classes from './styles/MatchesPost.module.scss';
import image from './assets/gude_temp.jpg';

const Card = ({username}) => (
    <div className={classes.card}>
        <img src={image} className={classes.card__img} alt="image" />
        <div className={classes.card__percentMatch}>99%</div>
        <div className={classes.card__nameGenreContainer}>
            <div className={classes.card__nameGenreContainer__username}>{username}</div>
            <div className={classes.card__nameGenreContainer__matchedGenres}>You both matched for: *genres</div>
        </div>
    </div>
)

function MatchesPost() {
  return (
    <div>
        <Navbar></Navbar>
        <div className={classes.container}>
            <img src={logo} className={classes.logo} alt="logo" />
            <h1 className={classes.container__title}>Your Matches</h1>
            <div className={classes.container__cardContainer}>
                <ul>
                    <li> 
                        <Card username="match 1"></Card>
                    </li>
                    <li> 
                        <Card username="match 2"></Card>
                    </li>
                    <li> 
                        <Card username="match 3"></Card>
                    </li>
                    <li> 
                        <Card username="match 4"></Card>
                    </li>
                    <li> 
                        <Card username="match 5"></Card>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default MatchesPost;

/*
<ul>
                    <li>
                        <a href = "/"> HOME </a>
                    </li>
                    <li>
                        <a href = "/"> MATCHES </a>
                    </li>
                    <li>
                        <a href = "/"> ABOUT US </a>
                    </li>
                </ul>
*/