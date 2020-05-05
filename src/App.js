import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar'
import Main from './containers/Main'
import Login from './components/Login'
import Register from './components/Register'
import MeetupCreate from './containers/MeetupCreate'
import Profile from './components/Profile'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {

  state = {
    user: "",
    friends: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/friends')
    .then(r => r.json())
    .then(object => {
      this.setState({
        friends: object
      })
    })
  }

  render(){
    return (
      <div className="App">
        <Router>
        <Navbar />  
        <Route exact path={`/`} render={() => <Main friends={this.state.friends} />} /> 
        <Route exact path={`/register`} component={Register} /> 
        <Route exact path={`/login`} component={Login} />
        <Route exact path={`/meetup`} render={() => <MeetupCreate friends={this.state.friends} />}/>
        <Route exact path={`/profile`} component={() => <Profile />}/>
        </Router>
      </div>
    );
  }
}

export default App;
