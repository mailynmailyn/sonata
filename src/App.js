import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material'; //this is to import the button from material ui

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload YOUR MOM.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={()=>alert('GAE')} variant='contained'> GET UR MOM'D </Button> 
      </header>
    </div>
  );
}

export default App;
