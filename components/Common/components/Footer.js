import React from 'react'
import { style } from 'glamor'
import Hr from './Hr'
import * as Layout from './Layout'

const footerStyle = style({
  padding: '2em 0',
  textAlign: 'center'
})

export default () =>
  <Layout.Row>
    <Layout.Column>
      <Hr />
      <div {...footerStyle}>
        Copyright Luke Morton 2017. Made with React, <a href='https://github.com/lukemorton/reactivist'>view the source</a> on GitHub.
      </div>
    </Layout.Column>
  </Layout.Row>
