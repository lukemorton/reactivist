import React from 'react'
import app from '../../src/app'
import { Avatar, Content, Header, Page } from '../../components/Common'
import { Introduction, Subscribe } from '../../components/Marketing'

export default app.page(() =>
  <Page
    title='Reactivist'
    header={
      <Header jumbo>
        <Introduction>
          <h1>
            We find, develop, and share best practice knowledge in the React community
          </h1>
        </Introduction>
      </Header>
    }>
    <Introduction.Subscribe />

    <Content>
      <Content.ReadingColumn>
        <h2 className='h1'>A Coming Soon Letter</h2>

        <p>
          <Avatar gravatar='e7f62d126dec76b03e6d2393e44247ad' /><br />
        </p>

        <p>
          <em>9th September 2017</em>
        </p>

        <p>
          Knowing where to start with React is a common problem. React is a library that is gaining massive popularity and for good reason, it's awesome!
        </p>

        <p>
          Over the last 3 years I've encountered many delivery teams that have been super excited about using React, so excited that even through the pain of having to setup an application structure and boilerplate they still persist with React. React is a force to be reckoned with.
        </p>

        <p>
          With projects like <code>create-react-app</code> and Next.js beginning to provide some structure in the React application world things are starting to improve. It's not Ruby or Rails though. No matter what you think of the Ruby language or Rails framework you have to admit that it's one of the nicest placest one can start out in programming with the copious amounts of guides, documentation, and books.
        </p>

        <h2>Resources in React Community</h2>

        <p>
          The JavaScript community is different and therefore React is too. There is no big MVC framework and it seems plenty of folk are happy with that. However without a framework to rally around, one rich with resources for beginners, and a set of principles or best practices that most agree on.
        </p>

        <p>
          It's not that resources and best practices do not exist in the JavaScript community, it's just that we share them organically, a blog post here and there, a conversation on Twitter, etc. There isn't an equivalent to Rails guides for React.
        </p>

        <h2>Contributing back to the community</h2>

        <p>
          With Reactivist we hope to provide a focussed resource for both those new to React and those who've been around the block more than a few times. With timely articles, collections of guides and howtos, opinion pieces, and other content, we hope to help share knowledge in the community.
        </p>

        <p>
          Our beginners guides will pull together common practices, advice, and gotchas, that those who've been using React for a while have learnt through painful experiences or a conversation at a conference.
        </p>

        <p>
          Our best practice guides will our writers experiences with other community guidelines, expert opinions, and lore, in a non-controversial way. Reactivist wants to share ideas rather than enforce one particular voice or opinion.
        </p>

        <h2>
          The Plan
        </h2>

        <p>
          Over the next couple of months we will begin pulling content together in some particular problem areas we see. The first being modular component design – what are good ways to structure, combine, and use components. The second being testing React applications – what are the various ways of testing, when and what to test, how to keep those test suites speedy.
        </p>

        <p>
          We hope this content will generate some interest in Reactivist and then we hope to convince visitors to sign up for The Reactivist, our planned weekly newsletter that won't link to 10 articles you'll never read but instead aim to provide advice and thought pieces right in your inbox that you can finish in around 10 minutes. We hope to launch The Reactivist in December.
        </p>

        <p>
          So thanks for taking some time to understand the project, and if you have any questions you can find me <a href='https://twitter.com/LukeMorton'>on Twitter</a>.
        </p>

        <p>
          Best,<br />Luke
        </p>

        <Subscribe />
      </Content.ReadingColumn>
    </Content>
  </Page>
)
