import React from 'react';
import Map from '../components/Map'
import Restaurants from './Restaurants'

const Section = () => {

  return (
    <section className="section">
      <Map />
      <Restaurants />
    </section>
  )
}

export default Section;