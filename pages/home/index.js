import React from 'react'
import app from '../../src/app'
import { Page, Content } from '../../components/Common'
import { Header } from '../../components/Header'
import { Introduction, Subscribe } from '../../components/Marketing'

const JumboHeader = () =>
  <Header jumbo={<Introduction />} />

export default app.page(() =>
  <Page title='Reactivist' header={<JumboHeader />}>
    <Subscribe />

    <Content>
      <Content.ReadingColumn>
        <h3>Getting Started</h3>
      </Content.ReadingColumn>

      <Content.ReadingAside>
        <h3>Want to help?</h3>

        <p>We would love for you to help out with knowledge and content.</p>

        <p>Get in touch with Luke on <a href="https://twitter.com/LukeMorton">Twitter</a> or <a href="https://github.com/lukemorton/reactivist">GitHub</a></p>
      </Content.ReadingAside>
    </Content>
  </Page>
)
