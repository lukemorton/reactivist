import React from 'react'
import Page from './Page'
import { style } from 'glamor'
import { Bar } from './Header'
import * as Layout from './Layout'
import Logo from './Logo'

const logoStyle = style({
  textDecoration: 'none'
})

const errorStyle = style({
  fontSize: '3em',
  textAlign: 'center',
  padding: '1em 0',
  '@media (min-width: 768px)': {
    padding: '3em 0'
  }
})

const LogoHeader = () =>
  <Bar>
    <Layout.Row>
      <Layout.Column md={3}>
        <a href='/' {...logoStyle}>
          <Logo color='black' />
        </a>
      </Layout.Column>
    </Layout.Row>
  </Bar>

const ErrorPage = ({ title, children }) =>
  <Page header={<LogoHeader />} title={title}>
    <Layout.Row>
      <Layout.Column md={8} mdShift={2}>
        <div {...errorStyle}>
          {children}
        </div>
      </Layout.Column>
    </Layout.Row>
  </Page>

export default ErrorPage
