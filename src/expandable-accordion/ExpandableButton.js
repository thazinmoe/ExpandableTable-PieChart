import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export const ExpandableButton = ({ isOpen, toggle }) => {
    const style ={
 
            background: "#3e4979",
            borderColor: "#FFFFFF",
            // width: 2rem;
            // height: '1.2rem',
            // background: var(--clr-grey-special);
            // display: flex;
            // align-items: center;
            // justify-content: center;
            // border-radius: 50%;
            color: "#FFFFFF",
            cursor: "pointer",
            padding: "3px",
        
    }
  return (
    <button className='expand-btn' style={style} onClick={toggle}>
      <FontAwesomeIcon
        icon={isOpen ? faMinus : faPlus}
        // style={{
        //   transform: `rotate(${isOpen ? 180 : 0}deg)`,
        //   transition: 'all 0.25s',
        // }}
      />
    </button>
  );
};
