import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar'
import Main from './containers/Main'
import Login from './components/Login'
import Register from './components/Register'
import MeetupCreate from './containers/MeetupCreate'
import LocationContextProvider from './contexts/LocationContext'




import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {

  state = {
    friends: [],
    friendsInvited: []
  }

  // friend = { 
  //   name: "Eric",
  //   address: "Brooklyn",
  //   img: "https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg"
  // }

  // renderFriends = () => {
  //   return Friends.map(friend => { <Friend key={friend.id} friend={friend} />})
  // }

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
        <LocationContextProvider>
        <Route exact path={`/meetup`} render={() => 
        <MeetupCreate friends={this.state.friends} friendsInvited={this.state.friendsInvited} />}/>
        </LocationContextProvider>
        </Router>
      </div>
    );
  }
}

export default App;
