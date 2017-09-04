import React from 'react'
import { style } from 'glamor'
import * as Layout from '../../Layout'
import { green, purple } from '../../../colors'
import Branding from './Branding'
import Nav from './Nav'

const baseHeaderStyle = style({
  height: '9em',
  marginTop: '.2em',
  overflow: 'hidden',
  textAlign: 'center',
  textShadow: '0 1px 2px rgba(0,0,0,.2)',
  '@media (min-width: 768px)': {
    height: '4em',
    textAlign: 'left'
  }
})

const regularHeaderStyle = style(baseHeaderStyle, {
  borderBottom: `1px solid ${purple('90%')}`,
  marginBottom: '1em'
})

const backgroundStyle = style({
  background: `url(/static/images/az-subtle.png), linear-gradient(160deg, ${purple()} 0%, ${green()} 100%)`,
  backgroundAttachment: 'fixed',
  boxShadow: '0 1px 8px rgba(0,0,0, .4)'
})

const jumboHeaderStyle = style(baseHeaderStyle, backgroundStyle, {
  height: 'auto',
  minHeight: '28em',
  '@media (min-width: 768px)': {
    height: 'auto'
  }
})

const regularHeaderBarStyle = style(backgroundStyle, {
  height: '.2em',
  position: 'absolute',
  top: 0,
  width: '100%'
})

const headerStyle = (jumbo) =>
  jumbo ? jumboHeaderStyle : regularHeaderStyle

const headerBarStyle = (jumbo) =>
  jumbo ? {} : regularHeaderBarStyle

export default ({ titled, jumbo, children }) =>
  <div {...headerStyle(jumbo)}>
    <div {...headerBarStyle(jumbo)} />

    <Layout.Row>
      <Layout.Column md={4}>
        <Branding jumbo={jumbo} />
      </Layout.Column>

      <Layout.Column md={8}>
        <Nav jumbo={jumbo} />
      </Layout.Column>
    </Layout.Row>

    {children}
  </div>
