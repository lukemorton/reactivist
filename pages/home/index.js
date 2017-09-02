import React from 'react'
import app from '../../src/app'
import { Page, Content } from '../../components/Common'
import { Header } from '../../components/Header'
import { Introduction } from '../../components/Marketing'

const JumboHeader = () =>
  <Header jumbo={<Introduction />} />

export default app.page(() =>
  <Page title="Reactivist" header={<JumboHeader />}>
    <Content>
      <Content.ReadingColumn>
        <h2>Get involved</h2>

        <p>We would love for you to help out with content.</p>
      </Content.ReadingColumn>

      <Content.ReadingAside>
        Factoid
      </Content.ReadingAside>
    </Content>
  </Page>
)
