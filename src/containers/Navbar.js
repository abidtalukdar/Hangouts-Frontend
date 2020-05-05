import React from 'react';
import Navitem from '../components/Navitem'
import { ReactComponent as ProfileIcon } from '../icons/profile.svg'
import { ReactComponent as HomeIcon } from '../icons/home.svg'
import { ReactComponent as MeetupIcon } from '../icons/friends.svg'
import { BrowserRouter as Route, Link } from "react-router-dom";

class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar">
        <Navitem><Link to="/">Hangouts</Link></Navitem>
        <Navitem text="Hangout"><Link to="/meetup"><MeetupIcon/></Link></Navitem>
        <Navitem text="Home"><Link to="/home"><HomeIcon/></Link></Navitem>
        <Navitem text="Profile"><Link to="/profile"><ProfileIcon/></Link></Navitem>
      </nav>
    )
  }
}

export default Navbar;