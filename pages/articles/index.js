import React from 'react'
import { Link } from 'republic/react'
import app from '../../src/app'
import { Content, Page } from '../../components/Common'

export default app.page(() =>
  <Page title='Reactivist Article'>
    <Content>
      <Content.ReadingColumn>
        <h1>Latest Articles</h1>

        <h2>
          <Link action='articles#show' params={{ slug: 'example' }}>
            Example article about cool stuff
          </Link>
        </h2>

        <p>A short excerpt about the article is due to be here in some short while. It will eventually be very great.</p>

        <h2>
          <Link action='articles#show' params={{ slug: 'another' }}>
            Another example of one
          </Link>
        </h2>

        <p>A short excerpt about the article is due to be here in some short while. It will eventually be very great.</p>
      </Content.ReadingColumn>

      <Content.ReadingAside>
        <h4>Want to help?</h4>

        <p>We would love for you to help out with knowledge and content.</p>

        <p>Get in touch with Luke on <a href='https://twitter.com/LukeMorton'>Twitter</a> or <a href='https://github.com/lukemorton/reactivist'>GitHub</a></p>
      </Content.ReadingAside>
    </Content>
  </Page>
)
