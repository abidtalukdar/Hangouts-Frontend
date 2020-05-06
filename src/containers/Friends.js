import React from 'react';
import Friend from '../components/Friend'


class Friends extends React.Component{

  renderFriend = () => {
    return this.props.friends.map(friend => 
      <Friend key={friend.id} friend={friend} friendsInvited={this.props.friendsInvited} invite={this.props.invite} />
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