import React from 'react'
import { style } from 'glamor'
import * as Layout from './Layout'

const Content = ({ children }) =>
  <Layout.Row justifyContent='center'>{children}</Layout.Row>

Content.ReadingWidth = ({ children }) =>
  <Layout.Column md={8}>{children}</Layout.Column>

export default Content
