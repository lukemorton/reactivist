import React from 'react'
import { style } from 'glamor'
import { Link } from 'republic/react'
import { Logo } from '../../Common'

const anchorStyle = style({
  textDecoration: 'none'
})

export default () =>
  <Link action='home#index'>
    <a {...anchorStyle}>
      <Logo />
    </a>
  </Link>
