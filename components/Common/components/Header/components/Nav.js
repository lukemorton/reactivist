import React from 'react'
import { Link } from 'republic/react'
import { style } from 'glamor'
import { purple } from '../../../colors'

const baseNavStyle = style({
  '& a': {
    letterSpacing: '1.1',
    lineHeight: '1.7',
    paddingLeft: '1em',
    paddingRight: '1em',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  '@media (min-width: 768px)': {
    textAlign: 'right',
    '& a': {
      paddingLeft: '2em',
      paddingRight: '0'
    }
  }
})

const regularNavStyle = style(baseNavStyle, {
  '& a': {
    color: purple('black'),
    '&:hover': {
      color: 'black'
    }
  }
})

const jumboNavStyle = style(baseNavStyle, {
  '& a': {
    color: purple('white'),
    '&:hover': {
      color: 'white'
    }
  }
})

const navStyle = (jumbo) =>
  jumbo ? jumboNavStyle : regularNavStyle

export default ({ jumbo }) =>
  <nav {...navStyle(jumbo)}>
    <Link action='home#index'>
      <a>Subscribe</a>
    </Link>

    <Link action='articles#index'>
      <a>Latest</a>
    </Link>

    <Link action='articles#index'>
      <a>Collections</a>
    </Link>

    <Link action='help#index'>
      <a>Help</a>
    </Link>
  </nav>
