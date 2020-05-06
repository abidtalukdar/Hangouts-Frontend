import React from 'react';
import './App.css';
import Navbar from './containers/Navbar'
import Main from './containers/Main'
import Login from './components/Login'
import Register from './components/Register'
import MeetupCreate from './containers/MeetupCreate'
import Profile from './components/Profile'
import AuthContextProvider, { AuthContext } from './contexts/AuthContext'

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

class App extends React.Component {

  state = {
    friends: [],
    friendsInvited: [],
    meetups: [],
    lat: 0,
    long:0,
    currentLat: 0,
    currentLong: 0,
    currentLocation: "",
    currentUser: null
  }

  handleUpdateCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  componentDidMount(){
    let userId = this.context.user
    fetch(`http://localhost:3000/friends/${userId}`)
    .then(r => r.json())
    .then(object => {
      this.setState({
        friends: object
      }, () => console.log(object))
    })
    navigator.geolocation.getCurrentPosition(
      (position) => {(this.geolocationCallback(position))}
    )
    fetch('http://localhost:3000/meetups')
    .then(r => r.json())
    .then(object => {
      this.setState({
        meetups: object
      }, () => console.log(object))
    })
  }

<<<<<<< HEAD
      navigator.geolocation.getCurrentPosition(
        (position) => {(this.geolocationCallback(position))}
      )
    }


      geolocationCallback(position) {
        this.setState({
          currentLat:position.coords.latitude,
          currentLong:position.coords.longitude,
          lat:position.coords.latitude,
          long:position.coords.longitude,
        }, () => this.geoCodeLocation())

    }
=======
  geolocationCallback(position) {
    this.setState({
      currentLat:position.coords.latitude,
      currentLong:position.coords.longitude,
      lat:position.coords.latitude,
      long:position.coords.longitude,
    }, () => this.geoCodeLocation())
  }
>>>>>>> 06166ad87a44481a911102108bab3d5ce72f9f9a

  geoCodeLocation = () => {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.currentLat},${this.state.currentLong}&key=${process.env.REACT_APP_GOOGLE_API}`)
      .then(r => r.json())
      .then(object => {
      this.setState({
        ...this.state, currentLocation: object.results[0].formatted_address
      })
    })
  }


  handleNewMeetups = (meetup) => {
    this.setState({ meetups: [meetup, ...this.state.meetups]})
  }

  inviteFriendToEvent = (e, select) => {
    this.setState({
      lat: 0,
      long: 0
    })
    this.setState({friendsInvited: select.value}, ()=> this.bigMaths())
  }

  inviteFriendFromList = () =>{
    this.bigMaths()
  }

  bigMaths = () =>{
    let currentLat = this.state.currentLat
    let currentLong = this.state.currentLong
    let friendsInvited = this.state.friendsInvited.length+1
    let testLat = currentLat/friendsInvited
    let testLong = currentLong/friendsInvited

    this.setState({
      lat: testLat,
      long: testLong
    }, ()=>{
      this.state.friendsInvited.forEach(friend => 
         { 
          fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${friend.default_address}&key=${process.env.REACT_APP_GOOGLE_API}`)
          .then(r => r.json())
          .then(object =>{
            let lat = 0
            let long = 0
            lat = (object.results[0].geometry.location.lat/friendsInvited)
            long = (object.results[0].geometry.location.lng/friendsInvited)
            this.setState({
              lat: this.state.lat += lat,
              long: this.state.long += long
            },()=>{console.log(this.state)})
          })
         
    })}
    )
  }
  
  static contextType = AuthContext

  render(){  
    return (
      <div className="App">
        <Router>
        <Navbar />
        <Route exact path={`/`} render={() => 
        <Main friends={this.state.friends} 
        friendsInvited={this.state.friendsInvited}
        meetups={this.state.meetups}
        lat = {this.state.currentLat} 
        long={this.state.currentLong}
        invite={this.inviteFriendFromList} 
        />
        }/> 
        <Route exact path={`/meetup`} render={() => 
        <MeetupCreate friends={this.state.friends} 
        friendsInvited={this.state.friendsInvited}
        handleNewMeetups={this.handleNewMeetups}
        invite={this.inviteFriendToEvent} 
        lat = {this.state.currentLat}
        lng = {this.state.currentLong}
        friendsLat = {this.state.lat}
        friendsLng = {this.state.long}
        />}/>
        <Route exact path={`/profile`} component={() => <Profile />}/>
        <Route exact path={`/register`} render={() => <Register handleUpdateCurrentUser={this.handleUpdateCurrentUser} />}/>
        <Route exact path={`/login`} render={() => <Login handleUpdateCurrentUser={this.handleUpdateCurrentUser} />}/>
        </Router>
      </div>
    );
  }
}

export default App;
