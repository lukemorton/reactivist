import React from 'react'
import { style, rehydrate } from 'glamor'

if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

import 'glamor/reset'
import { Head, Typography } from '../../Common'
import { Header as DefaultHeader } from '../../Header'
import { blue, purple } from '../../Common/colors'

const mainStyle = style({
  background: `url(/static/images/asfalt-dark.png), ${purple('white')}`,
  color: purple('black'),
  '& p a': {
    color: blue()
  },
  '& p a:hover, & p a:focus': {
    color: blue('60%')
  }
})

export default ({ title, header, children }) =>
  <main {...mainStyle}>
    <Typography>
      <Head title={title} />
      {header ? header : <DefaultHeader />}
      {children}
    </Typography>
  </main>
