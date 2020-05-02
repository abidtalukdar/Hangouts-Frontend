import React from 'react';
import Friends from './Friends'
import Section from './Section'
import LocationContextProvider from '../contexts/LocationContext'

class Main extends React.Component {

  render() {
    return (
      <main className="main">
        <LocationContextProvider>
        <Friends />
        <Section />
        </LocationContextProvider>
      </main>
    );
  }
}

export default Main;
