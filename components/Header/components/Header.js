import React from 'react'
import { style } from 'glamor'
import { Layout } from '../../Common'
import { green, purple } from '../../Common/colors'
import Branding from './Branding'
import Nav from './Nav'

const headerStyle = style({
  boxShadow: '0 1px 8px rgba(0,0,0, .4)',
  height: '9em',
  overflow: 'hidden',
  textAlign: 'center',
  textShadow: '0 1px 2px rgba(0,0,0,.2)',
  '@media (min-width: 768px)': {
    height: '4em',
    textAlign: 'left'
  }
})

const titledHeaderStyle = style(headerStyle, {
  height: '14em',
  marginBottom: '2em',
  '@media (min-width: 768px)': {
    height: '10em'
  }
})

const jumboHeaderStyle = style(headerStyle, {
  height: 'auto',
  '@media (min-width: 768px)': {
    height: 'auto'
  }
})

const backgroundStyle = style({
  background: `url(/static/images/az-subtle.png), linear-gradient(160deg, ${purple()} 0%, ${green()} 100%)`,
  backgroundAttachment: 'fixed',
  minHeight: '28em',
  paddingBottom: '2em'
})

function buildProps (titled, jumbo) {
  if (jumbo) {
    return { ...jumboHeaderStyle }
  } else if (titled) {
    return { ...titledHeaderStyle }
  } else {
    return { ...headerStyle }
  }
}

export default ({ titled, jumbo, children }) =>
  <div {...buildProps(titled, jumbo)}>
    <div {...backgroundStyle}>
      <Layout.Row>
        <Layout.Column md={4}>
          <Branding />
        </Layout.Column>

        <Layout.Column md={8}>
          <Nav />
        </Layout.Column>
      </Layout.Row>

      {children}
    </div>
  </div>
