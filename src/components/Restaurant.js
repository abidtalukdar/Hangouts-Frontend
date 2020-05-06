import React from 'react';
import { Card, Icon } from 'semantic-ui-react'
import styled from 'styled-components';
import { Rating } from 'semantic-ui-react'


let HoverImage = styled.img`
  height: 200px; 
  transition: transform .2s;
  display: inline;
   :hover{
    transform: scale(1.25)
  }
  `

const Restaurant = (props) => {

  let centerText = {
    textAlign: "center"
  }

    return (
      <Card style={{width:"23%", padding: "10px"}}>
        <HoverImage src={props.img} alt="restaurant"/>
        <Card.Content>
          <Card.Header style={centerText}>{props.name}</Card.Header>
          <Card.Meta style={centerText}>
            <span className='date'>{props.meta}</span>
          </Card.Meta>
          <Card.Description style={centerText}>
            {props.rating}
            <br></br>
            <strong>{props.location === undefined? null: props.location.address1}</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra style={centerText}>
          <a>
            <Icon name='food' />
            Yes we have food
          </a>
        </Card.Content>
      </Card>
    );
}


Restaurant.defaultProps = {
  description: "Restaurant is good maybe I don't know.",
  name: "Restaurant Name",
  Meta: "Type of Food"    
}

export default Restaurant;