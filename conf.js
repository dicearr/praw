module.exports = {
  port: process.env.PORT || 80,
  mongourl: process.env.MONGODB_URI || 'mongodb://localhost/praw'
}
