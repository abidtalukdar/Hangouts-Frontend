import React from 'react';
import Map from '../components/Map'
import Restaurants from './Restaurants'
import Meetups from './Meetups'

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