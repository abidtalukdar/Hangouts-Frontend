import React from 'react';
import Friends from './Friends'
import Section from './Section'

class Main extends React.Component {

  render() {
    return (
      <main className="main">
        <Friends />
        <Section />
      </main>
    );
  }
}

export default Main;
