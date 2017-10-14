import app from './app'

describe('app', () => {
  const actions = [
    'home#index',
    'articles#index',
    'articles#show',
    'help#index',
  ]

  actions.forEach((action) => {
    test(action, () => expect(app.routeHandler(action)).toBeDefined())
  })
})
