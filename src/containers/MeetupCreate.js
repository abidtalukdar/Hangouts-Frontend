import React from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import "react-datepicker/dist/react-datepicker.css";
import { Dropdown, Select, Button } from 'semantic-ui-react'
import YelpSearch from '../components/yelpsearch'
import Map from '../components/Map'
import { ReactComponent as Calendar } from '../icons/calendar.svg'
import { ReactComponent as Location } from '../icons/location.svg'

class MeetupCreate extends React.Component {

  state = {
    friendsInvited: ["2","3"],
    dateSelected: undefined,
    restaurantSelected: [],
    startDate: new Date(new Date().setDate(new Date().getDate()-1)),
    results: []
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

  inviteFriendToEvent = (e, select) => {
    this.setState({friendsInvited: select.value}, ()=>console.log(this.state))
  }

  onChangeResults = (locations) =>{
    this.setState({
      results: locations.businesses
    }, ()=> console.log(this.state))
  }

  restaurantLocations = () =>{
   let x =  this.state.results.map(restaurants =>{
      return {key: restaurants.id, value: restaurants, text: restaurants.name}
    })

    return x
  }

  render() {
    const friendOptions = this.props.friends.map(friend => {
      return { key: `${friend.id}`, text: `${friend.first_name}`, value: `${friend.id}` }
    })

    
    return (
      <section className="create-section">
        <h2 className="create-header">Create Hangout</h2>

        <div className="create-container">
          <form className="create-form">
            <YelpSearch  results = {this.onChangeResults}/>

            <div className="create-hangout">
              <div className="hangout-div">
                {/* <label className="hangout">Hangout Date: </label> */}
                <Calendar /><SemanticDatepicker minDate={this.state.startDate} onChange={this.onChangeCalendar}/>
              </div>
              <div className="hangout-div">
                {/* <label className="hangout">Hangout Location: </label> */}
                {/* should get location by address. should be auto populated? */}
                <Location /><Select placeholder='Select the location' options={this.restaurantLocations()} onChange={this.onChangeLocation} />
                {/* <Dropdown placeholder='Select a location' search selection options={this.restaurantLocations()} /> */}
              </div>
              <div className="hangout-div">
                <label className="hangout">Invited:</label>
                <Dropdown placeholder='Select Friends'  fluid multiple selection options={friendOptions} onChange={this.inviteFriendToEvent}
                value = {this.state.friendsInvited}
                />
              </div>
            </div>
            <Button type='submit'>Create Hangout</Button>
          </form>
          
          <div className="create-map">
            <Map restaurants={this.state.results}/>
          </div>
        </div>
      </section>
    );
  }
}

export default MeetupCreate;
