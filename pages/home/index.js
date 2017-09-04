import React from 'react'
import app from '../../src/app'
import { Content, Header, Page } from '../../components/Common'
import { Introduction, Subscribe } from '../../components/Marketing'

const JumboHeader = () =>
  <Header jumbo>
    <Introduction />
  </Header>

export default app.page(() =>
  <Page title='Reactivist' header={<JumboHeader />}>
    <Subscribe />

    <Content>
      <Content.ReadingColumn>
        <h2>Getting Started</h2>

        <p>Knowing where to start with React is a common problem. We have put together resources to help teams and individuals get started.</p>

        <ul>
          <li><a href='#'>First introduction to React</a></li>
          <li><a href='#'>Teaching materials for teams</a></li>
          <li><a href='#'>Example applications using React</a></li>
        </ul>

        <p>You can find more beginner guides in our <a href='#'>Getting Started</a> collection.</p>

        <h2>Best Practice</h2>

        <p>There isn't a lot of writing on Best Practice in React. We have put some ideas down.</p>

        <ul>
          <li><a href='#'>Test Driven Development with Jest</a></li>
          <li><a href='#'>How to structure your components directory</a></li>
          <li><a href='#'>Building a pattern library with Storybook</a></li>
        </ul>

        <p>You can find more expert advice in our <a href='#'>Best Practice</a> collection.</p>

        <h2>Want to help us?</h2>

        <p>We would love for you to help out with knowledge and content.</p>

        <p>Get in touch with Luke on <a href='https://twitter.com/LukeMorton'>Twitter</a> or <a href='https://github.com/lukemorton/reactivist'>GitHub</a></p>
      </Content.ReadingColumn>
    </Content>
  </Page>
)
