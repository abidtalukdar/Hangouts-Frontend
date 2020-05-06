import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as SentIcon } from '../icons/sent.svg'
import { ReactComponent as InviteIcon } from '../icons/invite.svg'
import { ReactComponent as InvitedIcon } from '../icons/invited.svg'

export default function Friend(props) {
  const { first_name, last_name, image, default_address } = props.friend
  const { friendsInvited } = props
  const [open, setOpen] = useState(false);
  const handleFriendsInvited = () => {
    setAdd(!add)
    if(friendsInvited.includes(props.friend)){
      let index = friendsInvited.indexOf(props.friend)
      friendsInvited.splice(index, 1) 
      }
      else{
      friendsInvited.push(props.friend)
      props.invite()
      }
  }
  const [add, setAdd] = useState(false);
  return (
    <div>
      <div className="friend-header">
        <li className="friend" onClick={() => setOpen(!open)}>
          <h2>{first_name} {last_name}</h2>
        </li>
        <div className="friend-invite" onClick={handleFriendsInvited}>{add ? <InvitedIcon/> : <SentIcon/>}</div>
      </div>
      <CSSTransition in={open} timeout={400} classNames="display" unmountOnExit>
        <div className="friend-details">
          <img src={image} alt="friend" />
          <h3>{default_address}</h3>
        </div>
      </CSSTransition>
    </div>
  );
}