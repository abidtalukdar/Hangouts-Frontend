import React from 'react';
import { Search } from 'semantic-ui-react'

class YelpSearch extends React.Component {
  state = {
    value: "",
    results: [],
    isLoading: false
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('hi')

    let access_token = '2ZXb-IYEHI6iG2T09GbHcT_PahTAavoiajZhXQ5YHMJDirm-jPcwTDJ-NX-T9PIT7o7yHD8RE8boVb0m5DJBEDZvR1H90poosZGD-EK_K59hPIRbtPcpYpOSRmOwXnYx'

    let cors_url = 'https://cors-anywhere.herokuapp.com'
    let yelp_url = `https://api.yelp.com/v3/businesses/search?term=${this.state.value}&radius=1500&limit=6&latitude=40.712776&longitude=-74.005974`

    fetch(cors_url + '/' + yelp_url ,{
        headers: new Headers({
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json'
        })
      })
      .then(response => response.json())
      .then(locations => {
        this.props.handleResults(locations)
        this.setState({
        results: locations
      }, () => console.log(locations))})
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <form className="ui search" onSubmit={this.handleSubmit}>
        <div className="ui icon input">
          <input className="prompt" onChange={this.handleChange} value={this.state.value} />
          <i className="search icon" />
        </div>
      </form>
    )
  }
}

export default YelpSearch