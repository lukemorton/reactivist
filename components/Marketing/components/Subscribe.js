import React from 'react'
import Head from 'next/head'
import { style } from 'glamor'
import { Card, Layout } from '../../Common'

const subscribeStyle = style({
  boxShadow: '0 0 8px rgba(0,0,0, .1)'
})

const ctaStyle = style({
  marginBottom: '-.5em',
  minHeight: '12.1em'
})

export default class extends React.Component {
  render () {
    return (
      <Card {...subscribeStyle}>
        <Head>
          <script async src='https://assets.convertflow.com/scripts/1535.js' />
        </Head>

        <div {...ctaStyle}>
          <div dangerouslySetInnerHTML={{ __html: '<div class="cf-cta-snippet cta6385" website-id="1535" cta-id="6385"></div>' }} />
        </div>
      </Card>
    )
  }
}
