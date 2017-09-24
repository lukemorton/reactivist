import 'isomorphic-fetch'

const ARTICLES_ORIGIN = process.env.ARTICLES_ORIGIN

async function LoadArticles () {
  let articleUrl = ARTICLES_ORIGIN + '/static/articles/index.json'
  const res = await fetch(articleUrl)
  return await res.json()
}

export default async function LoadArticle ({ params }) {
  const articles = await LoadArticles()
  return { article: articles[params.slug] }
}
