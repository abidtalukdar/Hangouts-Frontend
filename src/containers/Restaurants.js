import React from 'react';
import Restaurant from '../components/Restaurant'
import { Card } from 'semantic-ui-react'
import {LocationContext} from '../contexts/LocationContext'



class Restaurants extends React.Component {

  state = {
    suggestions: [
    {image_url: "https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif"}
    ,{image_url: "https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif"}
    ,{image_url: "https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif"}
    ,{image_url: "https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif"}]
    ,lat: 0
    ,lng: 0
  }



componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat:position.coords.latitude,
          lng:position.coords.longitude
      }, () =>{this.setRestaurants()}
    )
  }
  )}

setRestaurants = () =>{
  console.log('hi')
  let cors_url = 'https://cors-anywhere.herokuapp.com'
  let yelp_url = `https://api.yelp.com/v3/businesses/search?term=food&radius=1500&limit=4&latitude=${this.state.lat}&longitude=${this.state.lng}`
  fetch(cors_url + '/' + yelp_url ,{
      headers: new Headers({
          'Authorization': `Bearer ${process.env.REACT_APP_YELP_API}`,
          'Content-Type': 'application/json'
      })
    })
  .then(r => r.json())
  .then(restaurants => {
    this.setState({
      suggestions: restaurants.businesses,
    })
  })
}

 

  renderCards = () =>{
    let x = this.state.suggestions.map(suggestion=>{
      return <Restaurant name = {suggestion.name} img={suggestion.image_url} location={suggestion.location} rating={suggestion.rating} />
    })
    return x
 }
  

  render() {
    return (
      <div>
        <h2>Restaurants Near You:</h2>
        <Card.Group itemsPerRow={5}>
          {this.renderCards()}
        </Card.Group>
      </div>
    );
  }
}

export default Restaurants;