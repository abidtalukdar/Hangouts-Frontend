import React from 'react';
import Friend from '../components/Friend';
import SuggestedFriend from '../components/SuggestedFriend';



class Friends extends React.Component{

  renderFriend = () => {
    return this.props.friends.map(friend => 
      <Friend key={friend.id} friend={friend} friendsInvited={this.props.friendsInvited} invite={this.props.invite} />
    )
  }
  
  renderSuggestedFriend = () => {
    return this.props.notfriends.map(suggestedFriend => 
      <SuggestedFriend key={suggestedFriend.id} suggestedFriend={suggestedFriend} handleAddFriend={this.props.handleAddFriend}
      />
    )
  }
  
  render() {
    console.log(this.props)

    return (
      <section className="friends">
        <ul className="friends-list">
          <li className="friend-label">Friends</li>
            {this.props.friends===undefined? null:this.renderFriend()}
        </ul>
        <ul id="suggested" className="friends-list">
          <li className="friend-label">Suggested Friends</li>
            {this.renderSuggestedFriend()}
        </ul>
      </section>
    );
  }
}

export default Friends;