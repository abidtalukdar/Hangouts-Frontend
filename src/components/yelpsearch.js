import React from 'react';
import { Search } from 'semantic-ui-react'

class YelpSearch extends React.Component {
  state = {
    value: "",
    results: []
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let cors_url = 'https://cors-anywhere.herokuapp.com'
    let yelp_url = `https://api.yelp.com/v3/businesses/search?term=${this.state.value}&radius=1500&limit=6&latitude=${this.props.lat}&longitude=${this.props.lng}`

    fetch(cors_url + '/' + yelp_url ,{
        headers: new Headers({
            'Authorization': `Bearer ${process.env.REACT_APP_YELP_API}`,
            'Content-Type': 'application/json'
        })
      })
      .then(response => response.json())
      .then(locations => {
        this.props.results(locations)
        console.log(locations)
        })
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    console.log(this.props)
    return (
      <form id="yelpsearch" className="ui search" onSubmit={this.handleSubmit}>
        <p>Search Restaurant Locations</p>
        <div className="ui icon input">
          <input className="prompt" placeholder="Search Restaurants" onChange={this.handleChange} value={this.state.value} />
          <i className="search icon" />
        </div>
      </form>
    )
  }
}

export default YelpSearch
