import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import Meetup from '../components/Meetup'

class Meetups extends Component {
  render() {
    return (
      <div>
        <h2>My Meetups</h2>
        <Card.Group itemsPerRow={5}>
          <Meetup img={'https://www.singleplatform.com/wp-content/uploads/2018/12/5-Tips-for-Improving-Restaurant-Ambiance.jpg'}/> 
          <Meetup img={'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg'}/> 
          <Meetup img={'https://media.cntraveler.com/photos/5b22bfdff04a775484b99dfc/master/pass/Alo-Restaurant__2018_Raffi-Photo-2.jpg'} title={'Sky Room'} /> 
          <Meetup img={'https://media.cntraveler.com/photos/5b22bfdff04a775484b99dfc/master/pass/Alo-Restaurant__2018_Raffi-Photo-2.jpg'} title={'Sky Room'} /> 
        </Card.Group>
      </div>
    );
  }
}

export default Meetups;