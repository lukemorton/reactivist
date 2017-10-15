import LoadArticle from './LoadArticle'

describe('LoadArticle', () => {
  it('should select article by slug', async () => {
    const expectedArticle = {}
    const allArticles = () => ({ 'cool-slug': expectedArticle })
    const { article } = await LoadArticle({ allArticles }, { params: { slug: 'cool-slug' }})
    expect(article).toBe(expectedArticle)
  })
})
