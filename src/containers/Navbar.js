import React from 'react';
import Navitem from '../components/Navitem'
import { ReactComponent as ProfileIcon } from '../icons/profile.svg'
import { ReactComponent as HomeIcon } from '../icons/home.svg'
import { ReactComponent as MeetupIcon } from '../icons/friends.svg'
import { BrowserRouter as Route, Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext'


class Navbar extends React.Component {



  static contextType = AuthContext

  render() {
    return (
      <>
      {this.context.user?
      <nav className="navbar">
        <Navitem><Link to='/'>Hangouts</Link></Navitem>
        <Navitem text="Hangout"><Link to="/hangout"><MeetupIcon/></Link></Navitem>
        <Navitem text="Home"><Link to="/home"><HomeIcon/></Link></Navitem>
        <Navitem text="Profile"><Link to="/profile"><ProfileIcon/></Link></Navitem>
      </nav>: 
      <nav className="navbar">
      <Navitem>Hangouts</Navitem>
      </nav>
      }
      </>
    )
  }
}

export default Navbar;