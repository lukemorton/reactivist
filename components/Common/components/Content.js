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

Content.Title = ({ children }) =>
  <Layout.Row justifyContent='center' {...titleStyle}>
    <Layout.Column md={10}>{children}</Layout.Column>
  </Layout.Row>

Content.ReadingPage = ({ title, children }) =>
  <Layout.Column md={11}>
    <Card>
      <div>
        {title}
      </div>

      <div>
        {children}
      </div>
    </Card>
  </Layout.Column>

Content.ReadingColumn = ({ children }) =>
  <Layout.Column md={8}>
    <Card>
      {children}
    </Card>
  </Layout.Column>


Content.ReadingAside = ({ children }) =>
  <Layout.Column md={4}>
    <Card>
      {children}
    </Card>
  </Layout.Column>

export default Content
