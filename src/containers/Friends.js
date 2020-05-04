import React from 'react';
import Friend from '../components/Friend'
import { ReactComponent as Friendicon } from '../icons/friends.svg'

class Friends extends React.Component{

  renderFriend = () => {
    return this.props.friends.map(friend => 
      <Friend key={friend.id} friend={friend}/>
    )
  }
  
  render() {
    return (
      <section className="friends">
        <ul className="friends-list">
          <li className="friend-label">Friends</li>
            {this.renderFriend()}
        </ul>
      </section>
    );
  }
}

export default Friends;