import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'




class MapContainer extends React.Component {

  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 14,
    currentLocation: ""
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
       (this.geolocationCallback(position));
      }
    )
}

  geolocationCallback(position){ 
      this.setState({
        lat:position.coords.latitude,
        lng:position.coords.longitude
      })
      this.geoCodeLocation()
   }
   

   geoCodeLocation = () => {
     fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.lat},${this.state.lng}&key=${process.env.REACT_APP_GOOGLE_API}`)
     .then(r => r.json())
     .then(object => {
      this.setState({
        currentLocation: object.results[0].formatted_address
      })
    })
  }
   

  
    render() {
    const position = [this.state.lat, this.state.lng]
    return (
    <div style={{textAlign: "center", marginBottom: "20px"}}>
      <Map center={position} zoom={this.state.zoom} 
      style={{display: "inline-block",height: "400px", width: "800px", border:"2px solid #ED2939", borderRadius: "25px"}}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <Marker position={position}>
          <Popup>
            You are near {this.state.currentLocation}
          </Popup>
        </Marker>
      </Map>
    </div>
    )
    }


}


export default MapContainer