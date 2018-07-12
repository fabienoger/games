import { GraphQLServer } from 'graphql-yoga'
import helmet from 'helmet'
import { connect, models } from './db'
import { port, endpoint, playground } from './config'
import resolvers from './graphql/resolvers'

const db = connect()

const context = {
  models,
  db
}

const server = new GraphQLServer({
  typeDefs: `${__dirname}/graphql/schema.graphql`,
  resolvers,
  context
})

const options = {
  port,
  endpoint,
  playground
}
console.log('options', options)

// HTTP security middleware
server.express.use(helmet())

server.start(options, () => {
  console.log(`Server is running on http://localhost:${options.port}`)
})
