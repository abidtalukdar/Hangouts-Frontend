import React, { Component } from 'react';
import { Card, Accordion, Icon } from 'semantic-ui-react'
import Meetup from '../components/Meetup'

class Meetups extends Component {

  // state = {
  //   meetups: []
  // }

  // componentDidMount(){
  //     fetch('http://localhost:3000/meetups')
  //     .then(r => r.json())
  //     .then(object => {
  //       this.setState({
  //         meetups: object})
  //       })
  // }

  renderMeetup = () => {
    return this.props.meetups.map(meetup => 
      <Meetup key={meetup.id} meetup={meetup}/>
    )
  }

  render() {
    return (
      <div className="meetup-container">
        {this.props.meetups ? this.renderMeetup() : <h2>There are no planned Hangouts</h2>}
      </div>
    );
  }
}

export default Meetups;




      // <div>
      //   <h2>My Meetups</h2>
      //   <Card.Group itemsPerRow={5}>
      //     <Meetup img={'https://www.singleplatform.com/wp-content/uploads/2018/12/5-Tips-for-Improving-Restaurant-Ambiance.jpg'}/> 
      //     <Meetup img={'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg'}/> 
      //     <Meetup img={'https://media.cntraveler.com/photos/5b22bfdff04a775484b99dfc/master/pass/Alo-Restaurant__2018_Raffi-Photo-2.jpg'} title={'Sky Room'} /> 
      //     <Meetup img={'https://media.cntraveler.com/photos/5b22bfdff04a775484b99dfc/master/pass/Alo-Restaurant__2018_Raffi-Photo-2.jpg'} title={'Sky Room'} /> 
      //   </Card.Group>
      // </div>