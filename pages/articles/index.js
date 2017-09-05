import React from 'react'
import { Link } from 'republic/react'
import app from '../../src/app'
import { Card, Content, Hr, Page } from '../../components/Common'

export default app.page(() =>
  <Page title='Reactivist Article'>
    <Content>
      <Content.ReadingColumn>
        <h1>Latest Articles</h1>

        <h2>
          <Link action='articles#show' params={{ slug: 'example' }}>
            First introduction to React
          </Link>
        </h2>

        <p>
          A short excerpt about the article is due to be here in some short while. It will eventually be very great.
          &nbsp;<Link action='articles#show' params={{ slug: 'example' }}>
            Read now.
          </Link>
        </p>

        <p>
          <small><em>Written 3 days ago by Luke in <a href='#'>Getting Started</a></em></small>
        </p>

        <Hr />

        <h2>
          <Link action='articles#show' params={{ slug: 'another' }}>
            Teaching materials for teams
          </Link>
        </h2>

        <p>We would love for you to help out with knowledge and content.</p>

        <p>
          A short excerpt about the article is due to be here in some short while. It will eventually be very great.
          &nbsp;<Link action='articles#show' params={{ slug: 'example' }}>
            Read now.
          </Link>
        </p>

        <p>
          <small><em>Written 8 days ago by Luke in <a href='#'>Teams</a> and <a href='#'>Getting Started</a></em></small>
        </p>

        <Hr />

        <Content.Relaxed>
          <Card>
            <h3>Want to help?</h3>

            <p>We would love for you to help out with knowledge and content.</p>

            <p>Get in touch with Luke on <a href='https://twitter.com/LukeMorton'>Twitter</a> or <a href='https://github.com/lukemorton/reactivist'>GitHub</a></p>
          </Card>
        </Content.Relaxed>

        <h2>
          <Link action='articles#show' params={{ slug: 'example' }}>
            Example applications using React
          </Link>
        </h2>

        <p>
          A short excerpt about the article is due to be here in some short while. It will eventually be very great.
          &nbsp;<Link action='articles#show' params={{ slug: 'example' }}>
            Read now.
          </Link>
        </p>

        <p>
          <small><em>Written 2 weeks ago by Luke in <a href='#'>Examples</a></em></small>
        </p>

        <Hr />

        <h2>
          <Link action='articles#show' params={{ slug: 'another' }}>
            Test Driven Development with Jest
          </Link>
        </h2>

        <p>
          A short excerpt about the article is due to be here in some short while. It will eventually be very great.
          &nbsp;<Link action='articles#show' params={{ slug: 'example' }}>
            Read now.
          </Link>
        </p>

        <p>
          <small><em>Written 3 weeks ago by Luke in <a href='#'>Testing</a></em></small>
        </p>

        <Hr />
      </Content.ReadingColumn>
    </Content>
  </Page>
)
