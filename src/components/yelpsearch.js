import React from 'react';
import { Search } from 'semantic-ui-react'


class YelpSearch extends React.Component {
  state = {
    value: "",
    results: [],
    isLoading: false
  }

  fetchSearch(event) {
    event.preventDefault()
    console.log('hi')

    const access_token = process.env.REACT_APP_YELP_API

    const url = 'https://api.yelp.com/v3/businesses/search?term="deli"&limit=6&location="New York"'
    
    let req = new Request(url, {
        method: 'GET',
        headers: new Headers({
        'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json'
        }),
        mode: 'no-cors'
      })


        fetch(req)
        .then(response => response.json())
        .then(locations => this.setState({
        results: locations
        // need callback function to retrieve results
      }, () => console.log(locations)))








  }

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })
    this.fetchSearch(e)
  }

  render() {
    const { isLoading, value, results } = this.state
    return (
      <Search
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        results={results}
        value={value}
        {...this.props}
      />

    )
  }
}

export default YelpSearch