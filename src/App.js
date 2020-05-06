import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar'
import Main from './containers/Main'
import Login from './components/Login'
import Register from './components/Register'
import MeetupCreate from './containers/MeetupCreate'
import Profile from './components/Profile'
import LocationContextProvider from './contexts/LocationContext'
import AuthContextProvider, { AuthContext } from './contexts/AuthContext'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {

  state = {
    friends: [],
    friendsInvited: [],
    currentUser: null
  }

  handleUpdateCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
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
    // console.log(this.state)
    return (
      <div className="App">
        <Router>
        <Navbar />  
          <AuthContextProvider>
            <Route exact path={`/`} render={() => <Main friends={this.state.friends} />} /> 
            <Route exact path={`/register`} render={() => <Register handleUpdateCurrentUser={this.handleUpdateCurrentUser} />} /> 
            <Route exact path={`/login`} render={() => <Login handleUpdateCurrentUser={this.handleUpdateCurrentUser} />} />
            <LocationContextProvider>
            <Route exact path={`/meetup`} render={() => <MeetupCreate friends={this.state.friends} friendsInvited={this.state.friendsInvited} />}/>
            </LocationContextProvider>
            <Route exact path={`/profile`} component={() => <Profile />}/>
          </AuthContextProvider>
        </Router>
      </div>
    );
  }
}

export default App;
