import React, { useState, useContext } from 'react';
import {Redirect} from "react-router-dom";


const Profile = (props) => {

  const [showFront, setShowFront] = useState(true)

    console.log(props)
  return (
    
    <section className="profile-section">
    {props.user === "pending"? <Redirect to="/register" />:null}
      <div className={showFront ? "profile-div":"profile-div flip"} onClick={() => setShowFront(!showFront)}>
        <div className="profile-front" >
          <article className="profile-image-container">
            <div className="profile-image-circle"><div className="profile-image">Profile Image</div></div>
          </article>
          <header className="profile-header">
            <h2>Eric Cheung</h2>
            <h3>Email</h3>
            <h3>Default Address</h3>
          </header>
        </div>
        <div className="profile-back">
          <h2>Change Password</h2>
        </div>
      </div>
    </section>
  )
}

export default Profile;