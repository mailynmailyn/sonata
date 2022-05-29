import './styles/App.css';
import React from "react";
import { Button } from '@mui/material'; //this is to import the button from material ui
import Navbar from './assets/Navbar.js';
import logo from './assets/logo.svg';
import AboutPage from './AboutPage.js';
import LoginPage from './LoginPage.js';
import EditProfile from "./EditProfile.js";
import GenreSelection from "./GenreSelection.js";
import Profile from "./Profile.js";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
      <Router>
      <Routes>
        <Route path='' element={<AboutPage />} /> 
        {/* switch to landing page later */}
        <Route path='/about' element={<AboutPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/editprofile' element={<EditProfile />} />
        <Route path='/selectgenres' element={<GenreSelection />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
    
  );
}

export default App;
