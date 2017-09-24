import React from 'react'
import app from '../../src/app'
import { Content, Page } from '../../components/Common'
import { Article } from '../../components/Articles'

export default app.page(({ article }) =>
  <Page title={`${article.title.plain} – Reactivist`}>
    <Content>
      <Content.ReadingColumn>
        <Article {...article} />
      </Content.ReadingColumn>
    </Content>
  </Page>
)
