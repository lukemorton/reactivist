import React from 'react'
import { style } from 'glamor'

const brandingStyle = style({
  fontWeight: 'strong',
  letterSpacing: '.05em',
  textTransform: 'uppercase'
})

export default () =>
  <div {...brandingStyle}>
    Reactivist
  </div>
