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

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const pageId = {
  login: 'login',
  about: 'about',
  edit: 'editProfile',
  select: 'selectGenres',
  profile: 'profile',
  create: 'createAccount',
  matchesPre: 'getmatched',
  matchesPost: 'matches'
};

const App = () => {
  const [currentPage, setPage] = useState('login');
  const [currentProfile, setCurrentProfile] = useState(5);
  const defaultProfile = 5;

  const onNavClick = () => {
    
  }

  return (
      <Router>
      <Routes>
        <Route path='' element={<LoginPage />} /> 
        <Route path='/about' element={<AboutPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/editprofile' element={<EditProfile />} />
        <Route path='/selectgenres' element={<GenreSelection />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/createaccount' element={<CreateAcc />} />
        <Route path='/getmatched' element={<MatchesPre/>} />
        <Route path='/matches' element={<MatchesPost/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
