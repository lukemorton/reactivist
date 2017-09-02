import React from 'react'
import { style } from 'glamor'

const typography = style({
  fontFamily: 'sans-serif',
  '& h1, & h2, & h3, & h4': {
    lineHeight: '2',
    margin: '0'
  },
  '& p': {
    margin: '0',
    paddingTop: '1.5em'
  }
})

export default ({ children }) =>
  <div {...typography}>{children}</div>
