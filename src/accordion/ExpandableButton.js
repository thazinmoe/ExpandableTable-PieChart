import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export const ExpandableButton = ({ isOpen, toggle }) => {
  return (
    <button className='expand-btn' onClick={toggle}>
        <FontAwesomeIcon
        //   icon={activeKey === item.id.toString() ? faChevronUp : faChevronDown}
        icon={faChevronDown}
        style={{
            transform : `rotate(${isOpen? 180 : 0}deg)`,
            transition: "all 0.25s",
        }}
        />
    

    </button>
  )
}
