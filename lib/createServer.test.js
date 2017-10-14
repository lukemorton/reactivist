import request from 'supertest'
import { createExpressServer } from './createServer'
import app from './app'

describe('createServer', () => {
  const fakeNextApp = {
    getRequestHandler () {
      return (req, res) => res.sendStatus(404)
    },

    render (req, res, pagePath, query) {
      res.sendStatus(200)
    }
  }

  describe('when route exists', () => {
    it('should return 200', async () => {
      const server = await createExpressServer(app, fakeNextApp)
      await request(server).get('/').expect(200)
    })
  })

  describe('when route does not exist', () => {
    it('should use default request handler', async () => {
      const server = await createExpressServer(app, fakeNextApp)
      await request(server).get('/bob').expect(404)
    })
  })
})
