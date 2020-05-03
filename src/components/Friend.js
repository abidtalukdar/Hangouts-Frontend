import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Friend(props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <li className="friend">
        <h2 onClick={() => setOpen(!open)}>
          {props.friend.name}
        </h2>
      </li>
      <CSSTransition in={open} timeout={400} classNames="display" unmountOnExit>
        <div className="friend-details">
          <img src={props.friend.img} />
          <h3>{props.friend.address}</h3>
        </div>
      </CSSTransition>
    </div>
  );
}