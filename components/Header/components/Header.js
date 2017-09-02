import React from 'react'
import { Layout } from '../../Common'
import Branding from './Branding'
import Nav from './Nav'

export default () =>
  <Layout.Row>
    <Layout.Column md={6}>
      <Branding />
    </Layout.Column>

    <Layout.Column md={6}>
      <Nav />
    </Layout.Column>
  </Layout.Row>
