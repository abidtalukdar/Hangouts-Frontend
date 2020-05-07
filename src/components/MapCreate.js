import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { divIcon } from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';

class MapCreate extends React.Component {

    state = {
      zoom: 11,
      friendsCoordinates: [],
      friends: []
    } 

    componentWillMount() {
      if(this.props.friendsInvited.length > 0){
        let invited = this.props.friends.filter(friend => this.props.friendsInvited.find(invited => invited.id === friend.id))
        this.setState({
          friends: [...this.state.friends, invited]
        })
      }
    }

    render() {
    
    const position = [this.props.lat, this.props.lng]
    const pinU = renderToStaticMarkup(<i id="user" class="fas fa-map-pin"></i>)
    const pinF = renderToStaticMarkup(<i id="friend" class="fas fa-map-pin"></i>)
    const pointer = renderToStaticMarkup(<i class="fas fa-map-pin"></i>);
    const place = divIcon({
      html: pointer,
    });
    const personU = divIcon({
      html: pinU,
    });
    const personF = divIcon({
      html: pinF,
    });

    return (
    <div style={{textAlign: "center", marginBottom: "20px"}}>
      <Map center={position} zoom={this.state.zoom} 
      style={{display: "inline-block", height: "450px", width: "800px", border:"2px solid #EB5E55", borderRadius: "25px"}}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <Marker icon={personU} position={position}>
          <Popup>
            {/* You are near {this.context.currentLocation} */}
          </Popup>
        </Marker>
          {this.props.restaurants.length > 0? 
          this.props.restaurants.map(result => {
          return <Marker icon={place} key={result.id} position={[result.coordinates.latitude,result.coordinates.longitude]}><Popup>
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

        {this.state.friends.length > 0? 
          this.state.friends.map(result => {
          return <Marker icon={personF} key={"test"} position={[result.lat,result.long]}><Popup>
            <div className="popup">
              <h3>{result.name}</h3>
              <img className="popup-image" src={result.image} alt={result.name}/>
              <h3>{result.address}</h3>
            </div>
            </Popup></Marker>
          }):null  
        }
      </Map>
    </div>
    )
    }


    
}

export default MapCreate