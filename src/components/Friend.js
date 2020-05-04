import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Friend({ first_name, last_name, image, default_address }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <li className="friend" onClick={() => setOpen(!open)}>
        <h2>
          {friend.first_name} {friend.last_name}
        </h2>
      </li>
      <CSSTransition in={open} timeout={400} classNames="display" unmountOnExit>
        <div className="friend-details">
          <img src={friend.image} />
          <h3>{friend.default_address}</h3>
        </div>
      </CSSTransition>
    </div>
  );
}