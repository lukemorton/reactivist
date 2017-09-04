import React from 'react'
import { style } from 'glamor'
import * as Layout from './Layout'
import Card from './Card'

const contentStyle = style({
  paddingBottom: '2em'
})

const titleStyle = style({
  textAlign: 'center'
})

const Content = ({ children }) =>
  <div {...contentStyle}>
    <Layout.Row justifyContent='center'>
      {children}
    </Layout.Row>
  </div>

Content.ReadingColumn = ({ children }) =>
  <Layout.Column md={8}>
    {children}
  </Layout.Column>

Content.ReadingAside = ({ children }) =>
  <Layout.Column md={4}>
    {children}
  </Layout.Column>

Content.Relaxed = ({ children }) =>
  <div style={{ margin: '0 -1.5em' }}>
    {children}
  </div>

export default Content
