import React from 'react'
import styled from '@emotion/styled'
import keyboardImg from './keyboard.png'

const KeyboardStyle = styled('img')`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
`

const Keyboard = () => (
  <div>
    <KeyboardStyle src={keyboardImg} alt='IPhoneX keyboard' />
  </div>
)

export default Keyboard
