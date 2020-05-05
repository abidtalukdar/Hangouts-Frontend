import React, { useContext } from 'react'
import Map from '../components/Map'
import Restaurants from './Restaurants'
import Meetups from './Meetups'
import {LocationContext} from '../contexts/LocationContext'


const Section = () => {



  return (
    
    <section className="section">
      <div className="meetup-map">
        <Map />
        <Meetups />
      </div>
      <Restaurants />
    </section>
  )
}

export default Section;