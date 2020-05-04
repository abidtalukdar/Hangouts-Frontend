import React from 'react';
import Friends from './Friends'
import Section from './Section'
import LocationContextProvider from '../contexts/LocationContext'

class Main extends React.Component {

  render() {
    console.log(this.props)
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
