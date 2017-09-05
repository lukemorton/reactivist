import React from 'react'
import { style } from 'glamor'

const typography = style({
  fontFamily: '"Open Sans", sans-serif',
  fontSize: '14px',
  lineHeight: '1.5',
  '& h1, & h2, & h3, & h4, & p, & ul': {
    margin: '0',
    paddingTop: '1.5em'
  },
  '& h1:first-child, & h2:first-child, & h3:first-child, & h4:first-child, & p:first-child, & ul:first-child': {
    paddingTop: '0'
  },
  '& h1, & h2, & h3, & h4': {
    fontWeight: '700',
    letterSpacing: '.2'
  },
  '& h1': {
    fontSize: '2.8em',
    paddingTop: '0',
    textAlign: 'center'
  },
  '& h2': { fontSize: '1.8em' },
  '& h3': { fontSize: '1.4em' },
  '& h4': { fontSize: '1.2em' },
  '& p, & ul': {
    fontSize: '1.2em',
    fontFamily: 'Lora,Georgia,Cambria,"Times New Roman",Times,serif'
  },
  '@media (min-width: 768px)': {
    fontSize: '18px',
    '& p, & ul': {
      // fontSize: '1em'
    }
  }
})

export default ({ children }) =>
  <div {...typography}>{children}</div>
