import { mountPage } from 'republic/test-next'
import nock from 'nock'
import ArticlesShowPage from './show'

function mockArticleIndexRequest () {
  nock(process.env.ARTICLES_ORIGIN)
    .get('/static/articles/index.json')
    .reply(200, {
      'test-article': {
        title: {
          html: '<h1>Cool title</h1>',
          plain: 'Cool title'
        },
        content: {}
      }
    })
}

describe('articles#index', () => {
  it('should have title', async () => {
    mockArticleIndexRequest()
    const page = await mountPage(ArticlesShowPage, 'articles#show', { slug: 'test-article' })
    expect(page.find('Page')).toHaveProp('title', 'Cool title – Reactivist')
  })
})
