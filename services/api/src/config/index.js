module.exports = {
  mongoUrl: process.env.MONGO_URL,
  port: process.env.PORT || 3000,
  endpoint: process.env.ENDPOINT || '/api',
  playground: process.env.NODE_ENV === 'development' ? '/playground' : false
}
