const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  rate: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Review', reviewSchema)
