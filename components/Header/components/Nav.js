import React from 'react'
import { Link } from 'republic/react'

export default () =>
  <nav>
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
