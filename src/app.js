import Republic, { route } from 'republic/next'
import LoadArticle from './articles/LoadArticle'

export default new Republic(
  route.page('/', 'home#index'),
  route.page('/articles', 'articles#index'),
  route.page('/articles/:slug', 'articles#show', LoadArticle),
  route.page('/help', 'help#index')
)
