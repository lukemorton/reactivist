import React from 'react'
import { rehydrate } from 'glamor'

if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

import 'glamor/reset'
import { Head, Layout, Typography } from '../../Common'
import { Header } from '../../Header'

export default ({ title, children }) =>
  <Layout.Page>
    <Typography>
      <Head title={title} />
      <Header />
      {children}
    </Typography>
  </Layout.Page>
