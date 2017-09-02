import React from 'react'
import { style, rehydrate } from 'glamor'

if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

import 'glamor/reset'
import { Head, Typography } from '../../Common'
import { Header as DefaultHeader } from '../../Header'
import { purple } from '../../Common/colors'

const mainStyle = style({
  background: purple('white'),
  color: purple('black')
})

export default ({ title, header, children }) =>
  <main {...mainStyle}>
    <Typography>
      <Head title={title} />
      {header ? header : <DefaultHeader />}
      {children}
    </Typography>
  </main>
