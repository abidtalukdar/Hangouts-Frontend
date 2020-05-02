import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react'


const Restaurant = (props) => {

  let centerText = {
    textAlign: "center"
  }
  
    return (
      <Card style={{width:"23%"}}>
        <img src={props.img} height={200} alt="restaurant"/>
        <Card.Content>
          <Card.Header style={centerText}>Restaurant Name</Card.Header>
          <Card.Meta style={centerText}>
            <span className='date'>Type of Food</span>
          </Card.Meta>
          <Card.Description style={centerText}>
            Restaurant is good maybe I don't know.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='food' />
            Yes we have food
          </a>
        </Card.Content>
      </Card>
    );
}

export default Restaurant;