import React from 'react';
import Navitem from '../components/Navitem'
import { ReactComponent as Profile } from '../icons/profile.svg'
import { ReactComponent as Home } from '../icons/home.svg'

class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar">
        <Navitem>Meetup</Navitem>
        <Navitem><Profile/></Navitem>
        <Navitem><Home/></Navitem>
      </nav>
    )
  }
}
  export default Navbar;