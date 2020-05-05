import React from 'react';
import Friends from './Friends'
import Map from '../components/Map'
import Restaurants from './Restaurants'
import Meetups from './Meetups'
import LocationContextProvider from '../contexts/LocationContext'
import { AuthContext } from '../contexts/AuthContext'

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

class Main extends React.Component {




  static contextType = AuthContext


  render() {
    return (
      <main className="main">
        {!this.context.user? <Redirect to="/register" />:null}
        <LocationContextProvider>
        <Friends friends={this.props.friends}/>
        <section className="section">
          <div className="meetup-map">
            <Map restaurants={[]} />
            <Meetups />
          </div>
          <Restaurants />
        </section>
        </LocationContextProvider>
      </main>
    );
  }
}

export default Main;
