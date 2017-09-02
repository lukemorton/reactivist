import React from 'react'
import { rehydrate } from 'glamor'

if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

import 'glamor/reset'
import { Head, Typography } from '../../Common'
import { Header as DefaultHeader } from '../../Header'

export default ({ title, header, children }) =>
  <main>
    <Typography>
      <Head title={title} />
      {header ? header : <DefaultHeader />}
      {children}
    </Typography>
  </main>
