import React, { useState } from 'react'
import styled from 'styled-components'


const SliderContentdiv = styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  
  
`;


export default SliderContentdiv