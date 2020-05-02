import React from 'react';

const Navitem = (props) => {
  return (
    <li className="navitem">
        {props.children}
    </li>
  )
}

export default Navitem;