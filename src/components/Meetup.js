import React from 'react';
import { Accordion, Icon } from 'semantic-ui-react'

class Meetup extends React.Component {

  state = { open: false }

  handleClick = (e) => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { location_name, location, date, time} = this.props.meetup
    const open = this.state.open
    // console.log(this.props)
    
    return (
      <Accordion styled>
        <Accordion.Title
          onClick={this.handleClick}
          >
          <Icon name='dropdown' />
          {location_name} | {date}
        </Accordion.Title>
        <Accordion.Content active={open === true}>
          <p>{location}</p>
          <p>{time}</p>
        </Accordion.Content>
      </Accordion>
    );
  }
}


Meetup.defaultProps = {
  datetime: "January 1, 2020 at 5:00 PM",
  description: "You are meeting Stanley, Eric and Abid at ",
  name: "Restaurant Name.",
}

export default Meetup;



    // let centerText = {
    //   textAlign: "center"
    // }

    // let HoverImage = styled.img`
    // height: 200px; 
    // transition: transform .2s;
    // display: inline;
    //  :hover{
    //   transform: scale(1.25)
    // }
    // `
    // <Card style={{width:"23%", padding: "10px"}}>
    //   <HoverImage src={props.img} alt="restaurant"/>
    //   <Card.Content>
    //     <Card.Header style={centerText}>{props.name}</Card.Header>
    //     <Card.Meta style={centerText}>
    //       <span className='datetime'>{props.datetime}</span>
    //     </Card.Meta>
    //     <Card.Description style={centerText}>
    //       {props.description + props.name}
    //     </Card.Description>
    //   </Card.Content>
    //   <Card.Content extra style={centerText}>
    //     <a>
    //       <Icon name='info circle'/> See Details
    //     </a>
    //   </Card.Content>
    // </Card>