import React from 'react'
import { style } from 'glamor'

const brandingStyle = style({
  color: 'white',
  letterSpacing: '1.4',
  textShadow: '0 1px 2px rgba(0,0,0,.2)',
  textTransform: 'uppercase'
})

export default () =>
  <div {...brandingStyle}>
    Reactivist
  </div>
