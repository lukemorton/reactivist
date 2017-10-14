import { mountPage } from 'republic/test-next'
import HomeIndexPage from './index'

describe('home#index', () => {
  it('should have title', async () => {
    const page = await mountPage(HomeIndexPage, 'home#index')
    expect(page.find('Page')).toHaveProp('title', 'Reactivist')
  })
})
