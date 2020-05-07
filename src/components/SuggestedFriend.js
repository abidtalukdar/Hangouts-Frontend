import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as AddedIcon } from '../icons/added.svg'
import { ReactComponent as AddIcon } from '../icons/add.svg'

export default function Friend(props) {
  const { first_name, last_name, image, default_address } = props.suggestedFriend
  const [open, setOpen] = useState(false);
  const handleAdd = () => {
    setAdd(true)
    this.props.handleAddFriend(this.suggestedFriend.id)
  }

  const [add, setAdd] = useState(false);
  
  return (
    <div>
      <div className="friend-header">
        <li className="friend" onClick={() => setOpen(!open)}>
          <h2>{first_name} {last_name}</h2>
        </li>
        <div className="friend-invite" onClick={handleAdd}>{add ? <AddedIcon /> : <AddIcon />}</div>
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