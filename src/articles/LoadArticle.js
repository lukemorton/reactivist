import 'isomorphic-fetch'

const ARTICLES_URL_PREFIX = 'http://localhost:3000'

async function LoadArticles () {
  let articleUrl = ARTICLES_URL_PREFIX + '/static/articles/index.json'
  const res = await fetch(articleUrl)
  return await res.json()
}

export default async function LoadArticle ({ params }) {
  const articles = await LoadArticles()
  return { article: articles[params.slug] }
}
