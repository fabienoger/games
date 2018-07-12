import mongoose from 'mongoose'
import config from '../config'
import Game from './models/game.js'

mongoose.Promise = global.Promise

const connectionOptions = {
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 5000,
  useNewUrlParser: true
}

mongoose.connection.once('open', () => {
  console.info('Mongoose Connection Open with MongoDB Server on ', config.mongoUrl)
})

mongoose.connection.on('error', e => {
  console.warn('db: mongodb connection - disconnect', e)
  mongoose.disconnect()
})

mongoose.connection.on('connected', () => {
  console.info('db: mongodb is connected')
})

mongoose.connection.on('disconnected', () => {
  console.info('db: mongodb is disconnected')
})

mongoose.connection.on('timeout', e => {
  console.info('db: mongodb timeout', e)
})

mongoose.connection.on('close', () => {
  console.info('db: mongodb connection closed')
})

export const connect = () => {
  console.info('Connecting to MongoDB', config.mongoUrl)
  return mongoose.connect(config.mongoUrl, connectionOptions)
}

export const disconnect = () => {
  console.info('Disconnection from MongoDB', config.database)
  return mongoose.disconnect()
}

export const models = {
  Game
}
