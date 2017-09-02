import React from 'react'
import { style } from 'glamor'

const brandingStyle = style({
  color: 'white',
  letterSpacing: '1.4',
  textTransform: 'uppercase'
})

export default () =>
  <div {...brandingStyle}>
    Reactivist
  </div>
