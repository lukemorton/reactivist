import { mountPage } from 'republic/test-next'
import ArticlesIndexPage from './index'

describe('articles#index', () => {
  it('should have title', async () => {
    const page = await mountPage(ArticlesIndexPage, 'articles#index')
    expect(page.find('Page')).toHaveProp('title', 'Latest Articles – Reactivist')
  })
})
