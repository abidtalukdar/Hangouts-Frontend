import React from 'react';
import Friend from '../components/Friend'

class Friends extends React.Component {
  render() {
    return (
      <section className="friends">
        <ul>
          <Friend />
        {/* render friends here */}
        </ul>
      </section>
    );
  }
}

export default Friends;