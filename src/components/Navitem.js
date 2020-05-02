import React from 'react';

const Navitem = (props) => {
  return (
    <li className="navitem">
      <a href="#">
        {props.children}
      </a>
    </li>
  )
}

export default Navitem;