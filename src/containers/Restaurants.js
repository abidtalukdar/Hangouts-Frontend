import React from 'react';
import Restaurant from '../components/Restaurant'
import { Card } from 'semantic-ui-react'

class Restaurants extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={5}>
        <Restaurant img={'https://www.singleplatform.com/wp-content/uploads/2018/12/5-Tips-for-Improving-Restaurant-Ambiance.jpg'}/> 
        <Restaurant img={'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg'}/> 
        <Restaurant img={'https://media.cntraveler.com/photos/5b22bfdff04a775484b99dfc/master/pass/Alo-Restaurant__2018_Raffi-Photo-2.jpg'} title={'Sky Room'} /> 
        <Restaurant img={'https://media.cntraveler.com/photos/5b22bfdff04a775484b99dfc/master/pass/Alo-Restaurant__2018_Raffi-Photo-2.jpg'} title={'Sky Room'} /> 
        
      </Card.Group>
    );
  }
}

export default Restaurants;