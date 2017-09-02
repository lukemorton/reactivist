import React from 'react'
import { style } from 'glamor'
import * as Layout from './Layout'
import { purple } from '../colors'

const contentStyle = style({
  paddingBottom: '2em'
})

const Content = ({ children }) =>
  <div {...contentStyle}>
    <Layout.Row justifyContent='center'>
      {children}
    </Layout.Row>
  </div>

const titleStyle = style({
  textAlign: 'center'
})

Content.Title = ({ children }) =>
  <Layout.Row justifyContent='center' {...titleStyle}>
    <Layout.Column md={10}>{children}</Layout.Column>
  </Layout.Row>

const raisedStyle = style({
  background: 'white',
  borderRadius: '.2em',
  boxShadow: '0 0 8px rgba(0,0,0, .03)',
  marginTop: '-1em',
  padding: '1.5em',
  '@media (min-width: 768px)': {
    marginTop: '0em',
  }
})

const readingPageStyle = style(raisedStyle, {
  paddingBottom: '3em'
})

const readingPageTitleStyle = style({
  padding: '0em',
  textAlign: 'center',
  '@media (min-width: 768px)': {
    padding: '2em'
  }
})

const readingPageContentStyle = style({
  padding: '0 1em',
  '@media (min-width: 768px)': {
    padding: '0 6em'
  }
})

Content.ReadingPage = ({ title, children }) =>
  <Layout.Column md={11}>
    <div {...readingPageStyle}>
      <div {...readingPageTitleStyle}>
        {title}
      </div>

      <div {...readingPageContentStyle}>
        {children}
      </div>
    </div>
  </Layout.Column>

const readingColumnStyle = style(raisedStyle)

Content.ReadingColumn = ({ children }) =>
  <Layout.Column md={8}>
    <div {...readingColumnStyle}>
      {children}
    </div>
  </Layout.Column>

const readingAsideStyle = style(raisedStyle)

Content.ReadingAside = ({ children }) =>
  <Layout.Column md={4}>
    <div {...readingAsideStyle}>
      {children}
    </div>
  </Layout.Column>

export default Content
