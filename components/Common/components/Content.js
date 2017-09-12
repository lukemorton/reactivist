import React from 'react'
import { style } from 'glamor'
import * as Layout from './Layout'

const contentStyle = style({
  paddingBottom: '2em'
})

const Content = ({ children }) =>
  <div {...contentStyle}>
    <Layout.Row justifyContent='center'>
      {children}
    </Layout.Row>
  </div>

Content.ReadingColumn = ({ children }) =>
  <Layout.Column sm={10} lg={8}>
    {children}
  </Layout.Column>

Content.Relaxed = ({ children }) =>
  <div style={{ margin: '3em -1.5em 0 -1.5em' }}>
    {children}
  </div>

export default Content
