import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Friend(props) {
  const { first_name, last_name, image, default_address } = props.friend
  const [open, setOpen] = useState(false);
  return (
    <div>
      <li className="friend" onClick={() => setOpen(!open)}>
        <h2>
          {first_name} {last_name}
        </h2>
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