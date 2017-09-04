import React from 'react'
import '../rehydrateGlamor'
import 'glamor/reset'
import { style } from 'glamor'
import Head from './Head'
import Tracking from './Tracking'
import Typography from './Typography'
import Header from './Header'
import { blue, purple } from '../../Common/colors'

const mainStyle = style({
  background: `url(/static/images/asfalt-dark.png), ${purple('white')}`,
  color: purple('black'),
  '& h1, & h2, & h3, & h4': {
    '& a': {
      color: purple('black'),
      textDecoration: 'none'
    }
  },
  '& p, & li': {
    '& a': {
      color: blue(),
      transition: 'color .2s'
    },
    '& a:hover, & a:focus': {
      color: blue('60%')
    }
  }
})

export default ({ title, header, children }) =>
  <main {...mainStyle}>
    <Typography>
      <Head title={title} />
      {header || <Header />}
      {children}
    </Typography>

    <Tracking />
  </main>
