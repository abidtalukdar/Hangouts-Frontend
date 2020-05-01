import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'


class Restaurant extends Component {
  render() {
    return (
      <Card>
        <div className="image" >
          <img src={this.props.img} />
        </div>
      </Card>
    );
  }
}

export default Restaurant;