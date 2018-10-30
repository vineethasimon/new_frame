import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Login from '../components/Login/login';
// import Home from '../components/Home/Home';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { Route } from 'react-router-dom';
import LoginPage from './loginPageContainer'
import HomePage from './HomePageContainer'
import {BrowserRouter} from 'react-router-dom';
class App extends Component {


//states w/o constructor
  state = {
    persons:[
      {name:'max',age:29},
      {name:'max2',age:292},
    ]
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>*/}
        <ErrorBoundary>
       
        
        {/*<Login/>*/}
        <Route exact path="/" component={LoginPage} />
        <Route path="/home_page" exact component={HomePage} />
        

        </ErrorBoundary>

      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
