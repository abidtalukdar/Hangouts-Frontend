import React from 'react';
import Friend from '../components/Friend'
import { ReactComponent as Friendicon } from '../icons/friends.svg'

class Friends extends React.Component{

  friend = { 
    name: "Eric",
    address: "Brooklyn",
    img: "https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg"
  }

  // renderFriends = () => {
  //   return Friends.map(friend => { <Friend key={friend.id} friend={friend} />})
  // }

  render() {
    return (
      <section className="friends">
        <ul className="friends-list">
          <li className="friend-label">Friends</li>
            <Friend friend={this.friend} />
            <Friend friend={this.friend} />
            <Friend friend={this.friend} />
        {/* renderFriends() */}
        </ul>
      </section>
    );
  }
}

export default Friends;