import React from 'react'
import { style } from 'glamor'

const typography = style({
  fontFamily: 'sans-serif',
  fontSize: '14px',
  lineHeight: '1.5',
  '@media (min-width: 768px)': {
    fontSize: '18px',
  },
  '& h1, & h2, & h3, & h4': {
    margin: '0',
    paddingTop: '1em'
  },
  '& h1': { fontSize: '3em' },
  '& h2': { fontSize: '2.2em' },
  '& h3': { fontSize: '1.4em' },
  '& h4': { fontSize: '1em' },
  '& p': {
    margin: '0',
    paddingTop: '1.5em'
  }
})

export default ({ children }) =>
  <div {...typography}>{children}</div>
