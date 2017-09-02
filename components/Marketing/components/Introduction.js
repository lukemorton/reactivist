import React from 'react'
import { style } from 'glamor'
import { Logo, Layout } from '../../Common'
import { purple } from '../../Common/colors'

const introductionStyle = style({
  color: purple('white'),
  textAlign: 'center'
})

export default () =>
  <Layout.Row {...introductionStyle} justifyContent='center'>
    <Layout.Column md={11}>
      <h1><Logo /></h1>
      <h2>We find, develop, and share best practice knowledge in the React community</h2>
    </Layout.Column>
  </Layout.Row>
