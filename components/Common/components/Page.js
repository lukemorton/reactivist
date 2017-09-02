import React from 'react'
import { rehydrate } from 'glamor'

if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

import 'glamor/reset'
import { Head, Typography } from '../../Common'
import { Header } from '../../Header'

export default ({ title, children }) =>
  <main>
    <Typography>
      <Head title={title} />
      <Header />
      {children}
    </Typography>
  </main>
