import React from 'react';
import Navitem from '../components/Navitem'
import { ReactComponent as Profile } from '../icons/profile.svg'
import { ReactComponent as Home } from '../icons/home.svg'
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar">
        <Navitem><Link to="/">Meetup</Link></Navitem>
        <Navitem><Link to="/profile"><Profile/></Link></Navitem>
        <Navitem><Link to="/home"><Home/></Link></Navitem>
      </nav>
    )
  }
}
  export default Navbar;