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
    let cors_url = 'https://cors-anywhere.herokuapp.com'
    let yelp_url = `https://api.yelp.com/v3/businesses/search?term=${this.state.value}&radius=1500&limit=6&latitude=40.712776&longitude=-74.005974`

    fetch(cors_url + '/' + yelp_url ,{
        headers: new Headers({
            'Authorization': `Bearer ${process.env.REACT_APP_YELP_API}`,
            'Content-Type': 'application/json'
        })
      })
      .then(response => response.json())
      .then(locations => {
        this.props.results(locations)
        })
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
