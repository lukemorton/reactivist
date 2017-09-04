import React from 'react'
import { style } from 'glamor'

const logoStyle = style({
  fontSize: '1.2em',
  letterSpacing: '1.4',
  textTransform: 'uppercase'
})

export default ({ color }) =>
  <span {...logoStyle} style={{ color: color || 'black' }}>
    Reactivist
  </span>
