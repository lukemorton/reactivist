import Republic, { route } from 'republic/next'
import { LoadArticle } from './articles/'

export default new Republic(
  route.page('/', 'home#index'),
  route.page('/articles', 'articles#index'),
  route.page('/articles/:slug', 'articles#show', async ({ params, redirectTo }) => {
    const { article } = await LoadArticle({ params })
    if (article) {
      return { article }
    } else {
      redirectTo('articles#index')
    }
  }),
  route.page('/help', 'help#index')
)
