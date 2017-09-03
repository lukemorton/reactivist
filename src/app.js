import Republic, { route } from 'republic/next'

export default new Republic(
  route.page('/', 'home#index'),
  route.page('/articles', 'articles#index'),
  route.page('/articles/:slug', 'articles#show'),
  route.page('/help', 'help#index')
)
