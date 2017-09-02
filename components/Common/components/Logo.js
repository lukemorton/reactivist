import React from 'react'
import { style } from 'glamor'

const logoStyle = style({
  color: 'white',
  letterSpacing: '1.4',
  textTransform: 'uppercase'
})

export default () =>
  <span {...logoStyle}>
    Reactivist
  </span>
