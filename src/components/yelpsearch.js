import React from 'react';

class YelpSearch extends React.Component {
  state = {
    value: "",
    results: []
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch(`http://localhost:3000/meetupsearch?lat=${this.props.lat}&lng=${this.props.lng}&value=${this.state.value}` ,{
      headers: new Headers({
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