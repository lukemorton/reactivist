import React from 'react'
import { style } from 'glamor'

const typography = style({
  fontFamily: 'Roboto, sans-serif',
  fontSize: '14px',
  lineHeight: '1.5',
  '& h1, & h2, & h3, & h4, & p, & ul': {
    margin: '0',
    paddingTop: '1.5em'
  },
  '& h1:first-child, & h2:first-child, & h3:first-child, & h4:first-child, & p:first-child, & ul:first-child': {
    paddingTop: '0'
  },
  '& h1': { fontSize: '2.8em' },
  '& h2': { fontSize: '1.8em' },
  '& h3': { fontSize: '1.4em' },
  '& h4': { fontSize: '1.2em' },
  '& p, & ul': {
    fontSize: '1.2em'
  },
  '@media (min-width: 768px)': {
    fontSize: '18px',
    '& h1': { fontSize: '3em' },
    '& h2': { fontSize: '1.8em' },
    '& h3': { fontSize: '1.4em' },
    '& h4': { fontSize: '1.2em' },
    '& h1, & h2, & h3, & h4': {
      margin: '0',
      paddingTop: '1em'
    },
    '& p, & ul': {
      fontSize: '1em'
    }
  }
})

export default ({ children }) =>
  <div {...typography}>{children}</div>
