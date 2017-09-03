import React from 'react'
import app from '../../src/app'
import { Content, Page } from '../../components/Common'

export default app.page(() =>
  <Page title='Reactivist Help'>
    <Content>
      <Content.ReadingColumn>
        <h1>Getting Help</h1>
      </Content.ReadingColumn>

      <Content.ReadingAside>
        <h4>Want to help?</h4>

        <p>We would love for you to help out with knowledge and content.</p>

        <p>Get in touch with Luke on <a href='https://twitter.com/LukeMorton'>Twitter</a> or <a href='https://github.com/lukemorton/reactivist'>GitHub</a></p>
      </Content.ReadingAside>
    </Content>
  </Page>
)
