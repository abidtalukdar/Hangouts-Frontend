import { ReactComponent as ProfileIcon } from '../icons/profile.svg'
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