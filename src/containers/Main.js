import React from 'react';
import Friends from './Friends'
import Map from '../components/Map'
import Restaurants from './Restaurants'
import Meetups from './Meetups'

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

class Main extends React.Component {
 




  render() {
    return (
      <main className="main">
      {!this.props.user ? <Redirect to="/register" />:null}
        <Friends friends={this.props.friends} 
        notfriends={this.props.notfriends}
        handleAddFriend={this.props.handleAddFriend}
        friendsInvited={this.props.friendsInvited} 
        invite = {this.props.invite}/>
        <section className="section">
          <div className="meetup-map">
            <Map restaurants={[]} friends={this.props.friendsLocation} lat ={this.props.lat} lng ={this.props.long} />
            <Meetups meetups={this.props.meetups}/>
          </div>
          <Restaurants/>
        </section>
      </main>
    );
  }
}

export default Main;
