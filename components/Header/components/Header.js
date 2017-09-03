import React from 'react'
import { style } from 'glamor'
import { Layout } from '../../Common'
import { purple } from '../../Common/colors'
import Branding from './Branding'
import Nav from './Nav'

const headerStyle = style({
  boxShadow: '0 1px 6px rgba(0,0,0, .4)',
  height: '9em',
  overflow: 'hidden',
  textAlign: 'center',
  textShadow: '0 1px 2px rgba(0,0,0,.2)',
  '@media (min-width: 768px)': {
    height: '4em',
    textAlign: 'left'
  }
})

const jumboHeaderStyle = style(headerStyle, {
  height: 'auto',
  '@media (min-width: 768px)': {
    height: 'auto',
  }
})

const backgroundStyle = style({
  background: 'url(/static/images/az-subtle.png), linear-gradient(160deg, #673ab6 0%,#00bcd4 100%)',
  backgroundAttachment: 'fixed',
  minHeight: '28em',
  paddingBottom: '2em'
})

export default ({ jumbo }) =>
  <div {...(jumbo ? jumboHeaderStyle : headerStyle)}>
    <div {...backgroundStyle}>
      <Layout.Row>
        <Layout.Column md={4}>
          <Branding />
        </Layout.Column>

        <Layout.Column md={8}>
          <Nav />
        </Layout.Column>
      </Layout.Row>

      {jumbo}
    </div>
  </div>
