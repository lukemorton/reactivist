import React from 'react'
import Head from 'next/head'
import { style } from 'glamor'
import { Card, Layout } from '../../Common'

const subscribeStyle = style({
  boxShadow: '0 0 8px rgba(0,0,0, .1)'
})

const intersectStyle = style({
  marginTop: '-9em',
  '@media (min-width: 768px)': {
    marginTop: '-12em'
  }
})

const ctaStyle = style({
  marginBottom: '-.5em',
  minHeight: '12.1em'
})

export default class extends React.Component {
  render () {
    return (
      <Layout.Row justifyContent='center' {...intersectStyle}>
        <Head>
          <script async src='https://assets.convertflow.com/scripts/1535.js' />
        </Head>
        <Layout.Column md={9}>
          <Card {...subscribeStyle}>
            <div {...ctaStyle}>
              <div dangerouslySetInnerHTML={{ __html: '<div class="cf-cta-snippet cta6385" website-id="1535" cta-id="6385"></div>' }} />
            </div>
          </Card>
        </Layout.Column>
      </Layout.Row>
    )
  }
}
