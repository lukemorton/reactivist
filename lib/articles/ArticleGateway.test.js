import nock from 'nock'
import { allArticles } from './ArticleGateway'

function mockArticleIndexRequest (mockIndex) {
  nock(process.env.ARTICLES_ORIGIN)
    .get('/static/articles/index.json')
    .reply(200, mockIndex)
}

describe('ArticleGateway', () => {
  describe('allArticles', () => {
    const mockIndex = {
      'test-article': {
        title: {
          html: '<h1>Cool title</h1>',
          plain: 'Cool title'
        },
        content: {}
      }
    }

    it('should have title', async () => {
      mockArticleIndexRequest(mockIndex)
      const articles = await allArticles()
      expect(articles).toMatchObject(mockIndex)
    })
  })
})
