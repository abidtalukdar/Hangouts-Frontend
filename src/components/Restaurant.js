import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react'
import styled from 'styled-components';



const Restaurant = (props) => {

  let centerText = {
    textAlign: "center"
  }

  let HoverImage = styled.img`
  height: 200px; 
  transition: transform .2s;
  display: inline;
  :hover{
    transform: scale(1.25)
  }
  `
  
    return (
      <Card style={{width:"23%", padding: "10px"}}>
        <HoverImage src={props.img} alt="restaurant"/>
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