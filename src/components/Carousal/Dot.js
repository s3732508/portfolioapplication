import React from 'react'
import styled from 'styled-components'

const Dot = styled.span`
 padding: 5px;
      margin-bottom: 10px;
      cursor: pointer;
      border-radius: 40%;
      background: ${props => props.active ? 'black' : 'white'};

`;

const Styleddiv = styled.div`
  position: absolute;
      top: 100px;
left: ${20}px;
      width: 0px;
      display: flex;
flex-direction: column;
      align-items: center;
      justify-content: center;
`;

const Dots = ({ activeindex, size, slides, handleClick }) => (
    <Styleddiv activeindex={activeindex} size={size}
	>
		{slides.map((slide, i) => (
            <Dot key={slide} active={activeindex === i} onClick={() => { handleClick(i) }}/>
        ))}
       
    </Styleddiv>
)

export default Dots