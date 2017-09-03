import React from 'react'
import '../rehydrateGlamor'
import 'glamor/reset'
import { style } from 'glamor'
import { Head, Typography } from '../../Common'
import { Header as DefaultHeader } from '../../Header'
import { blue, purple } from '../../Common/colors'

const mainStyle = style({
  background: `url(/static/images/asfalt-dark.png), ${purple('white')}`,
  color: purple('black'),
  '& p, & li': {
    '& a': {
      color: blue()
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
      {header || <DefaultHeader />}
      {children}
    </Typography>
  </main>
