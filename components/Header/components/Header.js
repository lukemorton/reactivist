import React from 'react'
import { style } from 'glamor'
import { Layout } from '../../Common'
import { purple } from '../../Common/colors'
import Branding from './Branding'
import Nav from './Nav'

const headerStyle = style({
  background: purple(),
  borderBottom: purple('dark'),
  overflow: 'hidden',
  height: '4em'
})

const jumboHeaderStyle = style(headerStyle, {
  height: 'auto'
})

const backgroundStyle = style({
  background: 'linear-gradient(160deg, #673ab6 0%,#db4437 100%)',
  height: '700px'
})

export default ({ jumbo }) =>
  <div {...(jumbo ? jumboHeaderStyle : headerStyle)}>
    <div {...backgroundStyle}>
      <Layout.Row>
        <Layout.Column md={6}>
          <Branding />
        </Layout.Column>

        <Layout.Column md={6}>
          <Nav />
        </Layout.Column>
      </Layout.Row>

      {jumbo}
    </div>
  </div>
