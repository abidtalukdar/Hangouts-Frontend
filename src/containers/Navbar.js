import React from 'react';
import Navitem from '../components/Navitem'
import { ReactComponent as ProfileIcon } from '../icons/profile.svg'
import { ReactComponent as HomeIcon } from '../icons/home.svg'
import { ReactComponent as MeetupIcon } from '../icons/friends.svg'
import { ReactComponent as RegisterIcon } from '../icons/pen-square-solid.svg'
import { ReactComponent as LoginIcon } from '../icons/sign-in-alt-solid.svg'
import { ReactComponent as SignOutIcon } from '../icons/hand-peace-solid.svg'


import { BrowserRouter as Route, Link } from "react-router-dom";


class Navbar extends React.Component {


  handleLogout = () => {
    fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include"
    })
      .then(r => r.json())
      .then(() => {
        this.props.updateUser("pending")
      })
  }


  render() {
    return (
      <>
      {this.props.user === "pending"?
      <nav className="navbar">
      <Navitem>Hangouts</Navitem>
      <Navitem text="Register"><Link to="/register"><RegisterIcon/></Link></Navitem>
      <Navitem text="Login"><Link to="/login"><LoginIcon/></Link></Navitem>
      </nav>
      :
      <nav className="navbar">
        <Navitem><Link to='/'>Hangouts</Link></Navitem>
        <Navitem text="Hangout"><Link to="/hangout"><MeetupIcon/></Link></Navitem>
        <Navitem text="Home"><Link to="/home"><HomeIcon/></Link></Navitem>
        <Navitem text="Profile"><Link to="/profile"><ProfileIcon/></Link></Navitem>
        <Navitem text="Signout"><Link onClick={this.handleLogout} to="/register"><SignOutIcon/></Link></Navitem>

      </nav>
      }
      </>
    )
  }
}

export default Navbar;