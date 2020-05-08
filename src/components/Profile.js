import React, { useState, useContext } from 'react';
import {Redirect} from "react-router-dom";


const Profile = (props) => {

  const [showFront, setShowFront] = useState(true)
  console.log(props.user)
  const { default_address, email, first_name, last_name, image} = props.user
  return (
    
    <section className="profile-section">
    {props.user === "pending"? <Redirect to="/register" />:null}
      <div className={showFront ? "profile-div":"profile-div flip"} onClick={() => setShowFront(!showFront)}>
        <div className="profile-front" >
          <article className="profile-image-container">
            <div className="profile-image-circle">
              <div className="profile-image">
                <img className="profile-image" src={image}/>
              </div>
            </div>
          </article>
          <header className="profile-header">
            <h2>{first_name} {last_name}</h2>
            <h4>{email}</h4>
            <h4>{default_address}</h4>
          </header>
        </div>
        <div className="profile-back">
          <h2></h2>
        </div>
      </div>
    </section>
  )
}

export default Profile;