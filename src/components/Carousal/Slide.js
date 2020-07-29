import React from 'react'
import styled, { css } from 'styled-components'

const Slide = styled.div`
  transition: all 1.2s;
transition-timing-function: linear, ease-in;
  height: 100%;
  width: 100%;
  display: block;
opacity: 0.95;
  border: 1px solid transparent;
  background-image: url('${props => props.content}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
`

export default Slide