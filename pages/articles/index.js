import React from 'react'
import app from '../../src/app'
import { Head } from '../../components/Common'
import { Header } from '../../components/Header'
import { Page } from '../../components/Layout'

export default app.page(() =>
  <Page>
    <Head title="Reactivist Articles" />
    <Header />
    <h1>Articles</h1>
  </Page>
)
