import React from 'react'
import { style } from 'glamor'
import { Layout } from '../../Common'
import { purple } from '../../Common/colors'
import { Branding } from '../../Header'

const introductionStyle = style({
  color: purple('white'),
  textAlign: 'center'
})

export default () =>
  <Layout.Row {...introductionStyle} justifyContent='center'>
    <Layout.Column md={11}>
      <h1><Branding /></h1>
      <h2>We find, develop, and share best practice knowledge in the React community</h2>
    </Layout.Column>
  </Layout.Row>
