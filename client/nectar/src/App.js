import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import logo from './img/color_icon.png';
import LoginScreen from './screens/LoginScreen';
import CreateItemScreen from './screens/CreateItemScreen';
import React from 'react';
import './App.css';


function App() {
  return (
    <Router>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="header">
          <img src={logo} className="App-logo"alt="nectar.com" />
          <h3 className="App-header">Nectar App</h3>
          </div>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="App-link">Login</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="App-link">Create Item</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Route path="/login" component={LoginScreen}/>
        <Route path="/create" component={CreateItemScreen}/>
      </div>
    </Router>
  );
}

export default App;
