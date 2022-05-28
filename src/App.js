import './styles/App.css';
import React from "react";
import { Button } from '@mui/material'; //this is to import the button from material ui
import Navbar from './assets/Navbar.js';
import logo from './assets/logo.svg';
import AboutPage from './AboutPage.js';
import LoginPage from './LoginPage.js';
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
      </Routes>
    </Router>
    
  );
}

export default App;
