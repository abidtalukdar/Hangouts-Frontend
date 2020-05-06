import React from 'react';
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
  Route
} from "react-router-dom";

class App extends React.Component {

  state = {
    friends: [],
    friendsInvited: [],
    lat: 0,
    long:0 
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
    this.setState({friendsInvited: select.value}, ()=> {
      let lat = 0
      let long = 0  
      this.state.friendsInvited.forEach(friend => 
         { 
          fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${friend.default_address}&key=${process.env.REACT_APP_GOOGLE_API}`)
          .then(r => r.json())
          .then(object =>{
            lat += object.results[0].geometry.location.lat 
            long += object.results[0].geometry.location.lat
            
            this.setState((prevState) => {  
              lat: prevState.lat += lat
            })

            this.setState((prevState) => {
              long: prevState.long += long
            })
          })
        })
    })
  }

  
  static contextType = AuthContext

  render(){
    console.log(this.props)
    return (
      <div className="App">
        <Router>
        <Navbar />
        <Route exact path={`/`} render={() => <Main friends={this.state.friends} friendsInvited={this.state.friendsInvited} />} /> 
        <LocationContextProvider>
        <Route exact path={`/meetup`} render={() => 
        <MeetupCreate friends={this.state.friends} friendsInvited={this.state.friendsInvited} invite={this.inviteFriendToEvent} />}/>
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
