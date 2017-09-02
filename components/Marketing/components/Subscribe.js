import React from 'react'
import { style } from 'glamor'
import { Layout } from '../../Common'

const subscribeStyle = style({
  background: 'white',
  borderRadius: '.2em',
  boxShadow: '0 0 8px rgba(0,0,0, .1)',
  padding: '1.8em 3em'
})

const intersectStyle = style({
  marginTop: '-4em',
  '@media (min-width: 768px)': {
    marginTop: '-9em'
  }
})

const ctaStyle = style({
  marginBottom: '-.5em'
})

export default () =>
  <Layout.Row justifyContent='center' {...intersectStyle}>
    <Layout.Column md={9}>
      <div {...subscribeStyle}>
        <div {...ctaStyle}>
          <div dangerouslySetInnerHTML={{ __html: '<div class="cf-cta-snippet cta6385" website-id="1535" cta-id="6385"></div>' }} />
        </div>
      </div>
    </Layout.Column>
  </Layout.Row>
