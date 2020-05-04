import React from 'react';
import { Search } from 'semantic-ui-react'
import SearchBar from 'react-search-bar-semantic-ui';


class YelpSearch extends React.Component {
  state = {
    value: "",
    results: [],
    isLoading: false
  }

  fetchSearch(event) {
    event.preventDefault()
    console.log('hi')

    
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + access_token);

    let cors_url = 'https://cors-anywhere.herokuapp.com'
    let yelp_url = `https://api.yelp.com/v3/businesses/search?term=${this.state.value}&radius=1500&limit=6&location="New York"`


    fetch(cors_url + '/' + yelp_url ,{
        headers: new Headers({
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json'
        })})
      .then(response => response.json())
      .then(locations => this.setState({
        results: locations
        // need callback function to retrieve results
      }, () => console.log(locations)))
    
  }


  consoleLogger = (e) =>{
    console.log('hi')
  }

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })
  }

  render() {
    const { isLoading, value, results } = this.state
    return (
    //   <Search
    //     loading={isLoading}
    //     onResultSelect={this.handleResultSelect}
    //     onSearchChange={this.handleSearchChange}
    //     results={results}
    //     value={value}
    //     {...this.props}
    //   />
      <SearchBar onResultSelect={this.consoleLogger}  data={[{title: "Hello World", description: "This is an example data.", image: "https://via.placeholder.com/150", price: 100}]} />
    )
  }
}

export default YelpSearch
