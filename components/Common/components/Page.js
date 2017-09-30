import React from 'react'
import '../rehydrateGlamor'
import 'glamor/reset'
import { style } from 'glamor'
import Head from './Head'
import Tracking from './Tracking'
import Typography from './Typography'
import Header from './Header'
import Footer from './Footer'
import { blue, purple } from '../../Common/colors'

const mainStyle = style({
  background: `url(/static/images/asfalt-dark.png), ${purple('white')}`,
  color: purple('dark'),
  '& h1, & h2, & h3, & h4': {
    color: purple('black'),
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

const Page = ({ title, header, children }) =>
  <main {...mainStyle}>
    <Typography>
      <Head title={title} />
      {header || <Header />}
      {children}
      <Footer />
    </Typography>

    <Tracking />
  </main>

export default Page
