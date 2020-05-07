import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

class MapContainer extends React.Component {

    state = {
      zoom: 11,
      friendsCoordinates: []
    } 
      
    

  
    render() {
      console.log(this.props)
    const position = [this.props.lat, this.props.lng]
    return (
    <div style={{textAlign: "center", marginBottom: "20px"}}>
      <Map center={position} zoom={this.state.zoom} 
      style={{display: "inline-block", height: "450px", width: "800px", border:"2px solid #EB5E55", borderRadius: "25px"}}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <Marker position={position}>
          <Popup>
            {/* You are near {this.context.currentLocation} */}
          </Popup>
        </Marker>
          {this.props.restaurants.length > 0? 
          this.props.restaurants.map(result => {
          return <Marker key={result.id} position={[result.coordinates.latitude,result.coordinates.longitude]}><Popup>
            <div className="popup">
              <h4>{result.name}</h4>
              <img className="popup-image" src={result.image_url}/>
              <p>{result.location.display_address.join(', ')}</p>
              <p>{result.display_phone}</p>
              <p>Rating <strong>{result.rating}</strong></p>
              <p>Price Range <strong>{result.price}</strong></p>
            </div>
            </Popup></Marker>
          }):null  
        }

        {this.props.friends !== undefined? 
          this.props.friends.map(result => {
          return <Marker key={"test"} position={[result.lat,result.long]}><Popup>
            <div className="popup">
              <h3>{result.name}</h3>
              <h3>{result.address}</h3>
              {/* <img className="popup-image" src={result.image_url}/>
              {result.location.display_address.join(', ')} <br></br>
              {result.display_phone}<br></br>
              {result.rating}<br></br>
              {result.price} */}
            </div>
            </Popup></Marker>
          }):null  
        }



        
        
      </Map>
    </div>
    )
    }


    
}




export default MapContainer