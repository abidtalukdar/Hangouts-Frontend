import React from 'react';
import Map from '../components/Map'
import Restaurants from './Restaurants'
import Meetups from './Meetups'

const Section = () => {

  return (
    <section className="section">
      <Map />
      <Meetups />
      <Restaurants />
    </section>
  )
}

export default Section;