import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import {Redirect} from "react-router-dom";


const Profile = () => {

  const [showFront, setShowFront] = useState(true)

  const authContext = useContext(AuthContext)

  return (
    <section className="profile-section">
      {!authContext.user? <Redirect to="/register" />:null}
      <div className={showFront ? "profile-div":"profile-div flip"} onClick={() => setShowFront(!showFront)}>
        <div className="profile-front" >
          <h2>Eric Cheung</h2>
          <p>Image</p>
          <h3>Email</h3>
          <h3>Default Address</h3>
        </div>
        <div className="profile-back">
          <h2>Change Password</h2>
        </div>
      </div>
    </section>
  )
}

export default Profile;