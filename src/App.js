import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar'
import Main from './containers/Main'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {

  
  render(){
    return (
      <div className="App">
        <Router>
        <Navbar />
        <Route exact path={`/`} component={Main} /> 
        </Router>
      </div>
    );
  }
}

export default App;
