import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import {LocationContext} from '../contexts/LocationContext'

class MapContainer extends React.Component {

    state = {
      zoom: 11
    } 

    static contextType = LocationContext
  
    render() {
    const position = [this.context.lat, this.context.lng]
    return (
    <div style={{textAlign: "center", marginBottom: "20px"}}>
      <Map center={position} zoom={this.state.zoom} 
      style={{display: "inline-block", height: "400px", width: "700px", border:"2px solid #ED2939", borderRadius: "25px"}}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <Marker position={position}>
          <Popup>
            You are near {this.context.currentLocation}
          </Popup>
          {this.props.restaurants.length > 0? 
          this.props.restaurants.map(result => {
            return <Marker key={result.id} position={[result.coordinates.latitude,result.coordinates.longitude]}/>
          }):null  
        }
        </Marker>
      </Map>
    </div>
    )
    }


    
}




export default MapContainer