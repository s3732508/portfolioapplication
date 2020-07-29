import React from 'react'
import styled from 'styled-components'

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const Arrowdiv = styled.div`
 display: inline;
      position: relative;
      
      ${props => props.direction === 'right' ? `left: ${83}px` : `left: ${0}px`}};
      height: 30px;
      width: 30px;
      justify-content: center;
      background: transparent;
      border-radius: 40%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }

   
  
`;

const Arrow = ({ activeindex, size, direction, handleClick }) => {
    return (

        < Arrowdiv
            onClick={handleClick} direction={direction} activeindex={activeindex} size={size}

        >
            {direction === 'right' ? <NavigateNextIcon /> : <NavigateBeforeIcon />}
        </Arrowdiv >
    )

}


export default Arrow