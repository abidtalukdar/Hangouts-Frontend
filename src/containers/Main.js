import React from 'react';
import Friends from './Friends'
import MeetupCreate from './MeetupCreate'
import Section from './Section'
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
        <Section />
        </LocationContextProvider>
      </main>
    );
  }
}

export default Main;
