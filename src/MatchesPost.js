import Navbar from './assets/Navbar.js';
import classes from './styles/MatchesPost.module.scss';
import logoCropped from './assets/logo_cropped.svg'
import shape from './assets/matches.svg';

const Card = ({data, onClick}) => (
    <div className={classes.card} onClick={onClick}>
        <img src={data.img} className={classes.card__img} alt="image" />
        <div className={classes.card__percentMatch}>Match Percentage: {data.percent}%</div>
        <div className={classes.card__nameGenreContainer}>
            <div className={classes.card__nameGenreContainer__username}>{data.username}</div>
            <div className={classes.card__nameGenreContainer__matchedGenres}>Their favourite genres: {data.genres.toString()}</div>
        </div>
    </div>
)

function MatchesPost({onCardClick, allProfiles}) {
  return (
    <div className={classes.content}>
        <img src={shape} className={classes.content__shape} alt="bg-shape" />

        <div className={classes.content__container}>
            <img src={logoCropped} className={classes.content__container__logo} alt="logo" />
            <h1 className={classes.content__container__title}>Your Matches</h1>
            <div className={classes.content__container__cardContainer}>
                {allProfiles.map(profile => (
                    <div>
                        <Card onClick={() => onCardClick(profile.id)} data={profile}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default MatchesPost;
/*

*/