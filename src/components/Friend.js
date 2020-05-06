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
    if(friendsInvited.includes(props.friend)){
      let index = friendsInvited.indexOf(props.friend)
      friendsInvited.splice(index, 1) 
      }
      else{
      friendsInvited.push(props.friend)
      props.invite()
      }
  }

  return (
    <div>
      <li className="friend" onClick={() => setOpen(!open)}>
        <h2>
          {first_name} {last_name}
        </h2>
        <div onClick={handleFriendsInvited}>{friendsInvited.includes(props.friend) ? <InvitedIcon/>:<SentIcon />}</div>
      </li>
      <CSSTransition in={open} timeout={400} classNames="display" unmountOnExit>
        <div className="friend-details">
          <img src={image} alt="friend" />
          <h3>{default_address}</h3>
        </div>
      </CSSTransition>
    </div>
  );
}