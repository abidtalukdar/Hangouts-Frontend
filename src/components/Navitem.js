import React from 'react';

const Navitem = (props) => {
  return (
    <li className="navitem">
      <p className="nav-text">{props.text}</p>
      <div>{props.children}</div>
    </li>
  )
}

export default Navitem;