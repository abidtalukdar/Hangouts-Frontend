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
  Link,
  Redirect
} from "react-router-dom";

class App extends React.Component {

  state = {
    friends: [],
    friendsInvited: []  
  }




  componentDidMount(){
    let userId = this.context.user
    fetch(`http://localhost:3000/friends/${userId}`)
    .then(r => r.json())
    .then(object => {
      this.setState({
        friends: object
      })
    })
  }


  inviteFriendToEvent = (e, select) => {
    this.setState({friendsInvited: select.value}, ()=>console.log(this.state))
  }
  



  static contextType = AuthContext



  render(){
 
    return (
      <div className="App">
        <Router>
        <Navbar />
        <Route exact path={`/`} render={() => <Main friends={this.state.friends} />} /> 
        <LocationContextProvider>
        <Route exact path={`/meetup`} render={() => 
        <MeetupCreate friends={this.state.friends} friendsInvited={this.state.friendsInvited} inviteFriend={this.inviteFriendToEvent} />}/>
        </LocationContextProvider>
        <Route exact path={`/profile`} component={() => <Profile />}/>
        <Route exact path={`/register`} component={() => <Register />}/>
        <Route exact path={`/login`} component={() => <Login />}/>
        </Router>
      </div>
    );
  }
}

export default App;
