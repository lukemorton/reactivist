import React from 'react'
import app from '../../src/app'
import { Content, Page } from '../../components/Common'

export default app.page(() =>
  <Page title='Reactivist Help'>
    <Content>
      <Content.ReadingColumn>
        <h1>Getting Help</h1>

        <h2>Have a question or issue with an article?</h2>

        <p>
          If there is something that doesn't quite make sense to you in an article, you're likely not the only one. Please take the time, if you can, to open an issue on our <a href='https://github.com/lukemorton/reactivist'>GitHub</a>. Make sure you link to the article :)
        </p>

        <h2>Want to say hello?</h2>

        <p>
          Feel free to say hi to Luke on <a href='https://twitter.com/LukeMorton'>Twitter</a> too.
        </p>

        <h2>Want to help?</h2>

        <p>We would love for you to help out with knowledge and content.</p>

        <p>Get in touch with Luke on <a href='https://twitter.com/LukeMorton'>Twitter</a> or <a href='https://github.com/lukemorton/reactivist'>GitHub</a></p>
      </Content.ReadingColumn>
    </Content>
  </Page>
)
