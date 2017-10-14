import React from 'react'
import { style } from 'glamor'
import * as Layout from '../../Layout'
import Bar from './Bar'
import Branding from './Branding'
import Nav from './Nav'

const navColumnStyle = style({
  marginTop: '-20px',
  '@media (min-width: 768px)': {
    marginTop: '0'
  }
})

export default ({ titled, jumbo, children }) =>
  <Bar titled={titled} jumbo={jumbo}>
    <Layout.Row>
      <Layout.Column md={3}>
        <Branding jumbo={jumbo} />
      </Layout.Column>

      <Layout.Column md={9} {...navColumnStyle}>
        <Nav jumbo={jumbo} />
      </Layout.Column>
    </Layout.Row>

    {children}
  </Bar>
