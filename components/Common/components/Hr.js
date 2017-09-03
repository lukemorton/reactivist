import React from 'react'
import { style } from 'glamor'
import { purple } from '../colors'

const hrStyle = style({
  border: '0',
  borderTop: `1px solid ${purple('90%')}`,
  margin: '0',
  marginTop: '3em'
})

export default () =>
  <hr {...hrStyle} />
