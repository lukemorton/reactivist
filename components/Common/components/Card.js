import React from 'react'
import { style } from 'glamor'

const cardStyle = style({
  background: 'white',
  borderRadius: '.2em',
  boxShadow: '0 0 8px rgba(0,0,0, .03)',
  marginTop: '3em',
  padding: '1.5em',
  '&:first-child': {
    marginTop: '0'
  }
})

export default (props) =>
  <div {...props} {...cardStyle} />
