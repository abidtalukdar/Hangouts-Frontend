import React from 'react';
import Navitem from '../components/Navitem'
import { ReactComponent as Profile } from '../icons/profile.svg'
import { ReactComponent as Home } from '../icons/home.svg'
import { ReactComponent as Meetup } from '../icons/friends.svg'
import { BrowserRouter as Route, Link } from "react-router-dom";

class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar">
        <Navitem><Link to="/">Hangouts</Link></Navitem>
        <Navitem><Link to="/meetup"><Meetup/></Link></Navitem>
        <Navitem><Link to="/home"><Home/></Link></Navitem>
        <Navitem><Link to="/profile"><Profile/></Link></Navitem>
      </nav>
    )
  }
}

export default Navbar;