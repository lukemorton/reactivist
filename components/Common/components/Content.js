import React from 'react'
import { style } from 'glamor'
import * as Layout from './Layout'

const Content = ({ children }) =>
  <Layout.Row justifyContent='center'>{children}</Layout.Row>

const titleStyle = style({
  textAlign: 'center'
})

Content.Title = ({ children }) =>
  <Layout.Row justifyContent='center' {...titleStyle}>
    <Layout.Column md={10}>{children}</Layout.Column>
  </Layout.Row>

Content.ReadingColumn = ({ children }) =>
  <Layout.Column md={9}>{children}</Layout.Column>

Content.ReadingAside = ({ children }) =>
  <Layout.Column md={3}>{children}</Layout.Column>

export default Content
