const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  author_name: {
    type: String,
    required: true
  },
  text: {
    type: String
  },
  rating: {
    type: Number,
    required: true
  },
  place_id: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Review', reviewSchema)
