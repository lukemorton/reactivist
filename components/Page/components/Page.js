import React from 'react'
import { Head } from '../../Common'
import { Header } from '../../Header'
import { Page } from '../../Layout'

export default ({ title, children }) =>
  <Page>
    <Head title={title} />
    <Header />
    {children}
  </Page>
