import React from 'react';
import { Card, Icon } from 'semantic-ui-react'

const Meetup = (props) => {

  let centerText = {
    textAlign: "center"
  }

  return (
    <Card style={{width:"23%"}}>
      <img src={props.img} height={200} alt="restaurant"/>
      <Card.Content>
        <Card.Header style={centerText}>Restaurant Name</Card.Header>
        <Card.Meta style={centerText}>
          <span className='datetime'>January 1, 2020 at 5:00 PM</span>
        </Card.Meta>
        <Card.Description style={centerText}>
          You are meeting Stanley, Eric and Abid at 'The Restaurants Name'.
        </Card.Description>
      </Card.Content>
      <Card.Content extra style={centerText}>
        <a>
          <Icon name='info circle'/> See Details
        </a>
      </Card.Content>
    </Card>
  );
}

export default Meetup;