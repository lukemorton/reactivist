import 'isomorphic-fetch'

const ARTICLES_ORIGIN = process.env.ARTICLES_ORIGIN

export async function allArticles () {
  let articleUrl = ARTICLES_ORIGIN + '/static/articles/index.json'
  const res = await fetch(articleUrl)
  return res.json()
}
