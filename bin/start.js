import createServer from '../src/createServer'

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'

createServer(dev).then((server) => {
  console.log(`Listening on port ${port} DEV=${dev}`)
  server.listen(port)
})
