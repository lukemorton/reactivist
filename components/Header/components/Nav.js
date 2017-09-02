import React from 'react'
import { Link } from 'republic/react'
import { style } from 'glamor'
import { purple } from '../../Common/colors'

const navStyle = style({
  '& a': {
    color: purple('white'),
    letterSpacing: '1.1',
    paddingLeft: '1em',
    paddingRight: '1em'
  },
  '@media (min-width: 768px)': {
    textAlign: 'right',
    '& a': {
      paddingLeft: '2em',
      paddingRight: '0'
    }
  }
})

export default () =>
  <nav {...navStyle}>
    <Link action='home#index'>
      <a>Subscribe</a>
    </Link>

    <Link action='articles#index'>
      <a>Articles</a>
    </Link>

    <Link action='help#index'>
      <a>Getting Help</a>
    </Link>
  </nav>
