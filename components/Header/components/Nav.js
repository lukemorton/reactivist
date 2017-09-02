import React from 'react'
import { Link } from 'republic/react'
import { style } from 'glamor'

const navStyle = style({
  textAlign: 'right',
  '& a': {
    paddingLeft: '3em'
  }
})

export default () =>
  <nav {...navStyle}>
    <Link action='home#index'>
      <a>Intro</a>
    </Link>

    <Link action='articles#index'>
      <a>Articles</a>
    </Link>

    <Link action='help#index'>
      <a>Getting Help</a>
    </Link>
  </nav>
