export default async function LoadArticle ({ allArticles }, { params }) {
  const articles = await allArticles()
  return { article: articles[params.slug] }
}
