import './styles/App.css';
import React, {useState} from "react";
import AboutPage from './AboutPage.js';
import LoginPage from './LoginPage.js';
import EditProfile from "./EditProfile.js";
import GenreSelection from "./GenreSelection.js";
import Profile from "./Profile.js";
import MatchesPost from "./MatchesPost.js";
import MatchesPre from "./MatchesPre.js";
import CreateAcc from "./CreateAccPage.js";
import Navbar from './assets/Navbar.js';
import json from './data.json';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  const [currentPage, setPage] = useState('login'); //describes the page to load in
  const [currentProfile, setCurrentProfile] = useState(6);//describes what profile to populate the profile page with
  const [loginFlag, setLoginFlag] = useState(false);

  //////////////////

  const [defaultProfile, editDefaultProfile] = useState(
    {
      "id": 6,
      "username": "test profile",
      "genres": [
          "rap", "pop", "jazz"
      ],
      "bio": "skskskskkss nct go brrr",
      "img": "sksksk",
      "percent": 100
  });

  const onEditDefaultProfileBio = (newBio) => {
    let temp = Object.assign({}, defaultProfile);
    temp.bio = newBio;
    editDefaultProfile(Object.assign({}, temp));
    setPage('profile');
  }

  //passes in the new genres the user chose as an array of strings
  const onEditDefaultProfileGenres = (newGenres) => {
    let tempArr = Object.assign({}, defaultProfile);
    tempArr.genres = newGenres;
    editDefaultProfile(Object.assign({}, tempArr));
    setPage('profile');
  }

  const [percentMatch, editPercentMatch] = useState([90,70,20,30,40]);

  //function for navbar links
  const onNavClick = (pageId) => {
    setPage(pageId);
    if (pageId == "profile"){
      setCurrentProfile(6);
    }
  }

  //function for finding which profile to populate the page with 
  const getCurrentProfile = () => {
    if (currentProfile == 6){
      return defaultProfile;
    }
    return json.find(profile => profile.id == currentProfile);
  }

  const onMatchesBtnClicked = () => {
    setPage('matches');
  }

  const onLoginBtnClick = () => {
    setLoginFlag(true);
    setPage('profile');
  }

  const onCreateAccBtnClick = () => {
    setPage('createAccount');
  }

  const onMatchCardClick = (profileId) => {
    setCurrentProfile(profileId);
    setPage('profile');
  }

  const onEditGenresBtnClicked = () => {
    setPage('selectGenres');
  }

  const onEditProfileBtnClicked = () => {
    setPage('editProfile');
  }

  return (
    <div>
      { loginFlag && <Navbar onNavLinkClick={onNavClick}/> }
      { currentPage == 'login' && <LoginPage onLoginClick={onLoginBtnClick} onCreateAccClick= {onCreateAccBtnClick} /> }
      { currentPage == 'createAccount' && <CreateAcc/>}
      { currentPage == 'about' && <AboutPage/>}
      { currentPage == 'editProfile' && <EditProfile onEditProfile = {onEditDefaultProfileBio}/>}
      { currentPage == 'selectGenres' && <GenreSelection onEditGenres = {onEditDefaultProfileGenres}/>}
      { currentPage == 'profile' && <Profile currentProfile={getCurrentProfile()} onEditGenresClicked={onEditGenresBtnClicked} onEditProfileClicked = {onEditProfileBtnClicked}/>}
      { currentPage == 'getmatched' && <MatchesPre onMatchesClick={onMatchesBtnClicked}/>}
      { currentPage == 'matches' && <MatchesPost onCardClick={onMatchCardClick} 
        allProfiles={json.filter(profile => profile.id!= 6).sort(function (a, b) {return b.percent - a.percent;})}/>}
    </div>
  )
}

export default App;