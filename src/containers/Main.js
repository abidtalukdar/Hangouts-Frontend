import React from 'react';
import Friends from './Friends'
import Map from '../components/Map'
import Restaurants from './Restaurants'
import Meetups from './Meetups'
import LocationContextProvider from '../contexts/LocationContext'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

class Main extends React.Component {

  render() {
    return (
      <main className="main">
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
