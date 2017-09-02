import React from 'react'
import { Link } from 'republic/react'
import { style } from 'glamor'
import { purple } from '../../Common/colors'

const navStyle = style({
  textAlign: 'right',
  '& a': {
    color: purple('white'),
    letterSpacing: '1.1',
    paddingLeft: '2em'
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
