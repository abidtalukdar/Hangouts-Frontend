import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'




class MapContainer extends React.Component {

  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
       (this.geolocationCallback(position));
      },
      (error) => console.log(error),
      {enableHighAccuracy: true, timeout: 15000}
  );
}

  geolocationCallback( position ){
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;   
      this.setState({
        lat:position.coords.latitude,
        lng:position.coords.longitude
      })
   }

  
    render() {
    const position = [this.state.lat, this.state.lng]
    return (
    <div style={{textAlign: "center"}}>
      <Map center={position} zoom={this.state.zoom} 
      style={{display: "inline-block",height: "400px", width: "800px", border:"2px solid #73AD21", borderRadius: "25px"}}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <Marker position={position}>
          <Popup>
            This is your current location!
          </Popup>
        </Marker>
      </Map>
    </div>
    )
    }


}


export default MapContainer