import React from 'react'
import { style } from 'glamor'
import { Link } from 'republic/react'
import { Logo } from '../../Common'

const anchorStyle = style({
  textDecoration: 'none'
})

export default ({ jumbo }) =>
  <Link action='home#index'>
    <a {...anchorStyle}>
      <Logo color={jumbo ? 'white' : 'black'} />
    </a>
  </Link>
