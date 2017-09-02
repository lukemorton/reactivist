import React from 'react'
import { style } from 'glamor'
import { Logo, Layout } from '../../Common'
import { purple } from '../../Common/colors'

const introductionStyle = style({
  color: purple('white'),
  fontFamily: '"Roboto Condensed", sans-serif',
  letterSpacing: '1.3',
  textAlign: 'center',
  '& h2': {
    paddingTop: '.5em',
    fontWeight: 'normal'
  },
  '@media (min-width: 768px)': {
    paddingTop: '1em'
  }
})

export default () =>
  <Layout.Row {...introductionStyle} justifyContent='center'>
    <Layout.Column md={11.5}>
      <h1><Logo /></h1>
      <h2>We find, develop, and share best practice knowledge in the React community</h2>
    </Layout.Column>
  </Layout.Row>
