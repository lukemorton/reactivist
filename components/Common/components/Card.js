import React from 'react'
import { style } from 'glamor'

const raisedStyle = style({
  background: 'white',
  borderRadius: '.2em',
  boxShadow: '0 0 8px rgba(0,0,0, .03)',
  padding: '1.5em',
  '@media (min-width: 768px)': {
    marginTop: '0em'
  }
})

export default (props) =>
  <div {...props} {...raisedStyle} />
