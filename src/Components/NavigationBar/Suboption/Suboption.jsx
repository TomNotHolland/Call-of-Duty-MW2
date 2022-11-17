import React from 'react'
import './Suboption.css'

export const Suboption = ({OptionName}) => {

  return (
    <li className="sub-option">
      <a className="option-anchor" href="">
        <div className="border-2"></div>
        <p>{OptionName}</p>
      </a>
    </li>
  )
}

export default Suboption