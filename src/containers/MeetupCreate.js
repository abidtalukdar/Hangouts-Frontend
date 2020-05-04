import React from 'react';
import DatePicker from "react-datepicker";
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import "react-datepicker/dist/react-datepicker.css";
import { Dropdown, Form, Radio, Select, Button } from 'semantic-ui-react'
import YelpSearch from '../components/yelpsearch'




class MeetupCreate extends React.Component {

  state = {
    friendsInvited: [],
    dateSelected: undefined,
    restaurantSelected: [],
    startDate: new Date(new Date().setDate(new Date().getDate()-1))
  }

  onChangeCalendar = (e,data) =>{
    this.setState({
      dateSelected: data.value
    }, ()=>console.log(this.state))
  }

  onChangeLocation = (e,value) =>{
    this.setState({
      restaurantSelected: [value.value]
    }, ()=>console.log(this.state))
  }

  inviteFriendToEvent = (event) => {
    console.log(event.target.value)
    // this.setState(prevState => ({
    //   friendsInvited: ...prevState, event.target.value
    // }))
  }

  render() {
    const friendOptions = this.props.friends.map(friend => {
      return { key: `${friend.id}`, text: `${friend.first_name}`, value: `${friend.id}` }
    })

    let restaurantLocation = [
      {value: 'cote', text: 'Cote KBBQ'}
    ]
    
    return (

          <div className="create-container">
            <h1> Create Meetup </h1> 
            <YelpSearch/>
            <form>
              <label className="hangout">Hangout Date: </label>
              <SemanticDatepicker minDate={this.state.startDate} onChange={this.onChangeCalendar}/><br></br>
              <br></br>
              <label className="hangout">Hangout Location: </label>
              {/* should get location by address. should be auto populated? */}
              <Select placeholder='Select the location' options={restaurantLocation} onChange={this.onChangeLocation} />
              <br></br>
              <label className="hangout">Invited:</label><Dropdown placeholder='Select Friends' fluid multiple selection options={friendOptions} onClick={this.inviteFriendToEvent}/>
              <br></br>
              <Button type='submit'>Create Hangout</Button>
            </form>
          </div>
    );
  }
}

export default MeetupCreate;
