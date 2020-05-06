import React, { createContext } from 'react';

export const LocationContext = createContext();

class LocationContextProvider extends React.Component{

    state = {
        lat: 0,
        lng: 0,
        currentLocation: "",
        friendsCoordinates: []
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
          (position) => {(this.geolocationCallback(position))}
        )
    }

    geolocationCallback(position) {
        this.setState({
          lat:position.coords.latitude,
          lng:position.coords.longitude
        }, () => this.geoCodeLocation())
     }

     geoCodeLocation = () => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.lat},${this.state.lng}&key=${process.env.REACT_APP_GOOGLE_API}`)
        .then(r => r.json())
        .then(object => {
         this.setState({...this.state
           ,
           currentLocation: object.results[0].formatted_address
         })
       })
     }

    render() {
        return(
            <LocationContext.Provider value={{...this.state, try: this.try}}>
            {this.props.children}
            </LocationContext.Provider>
        )
    }
}

export default LocationContextProvider