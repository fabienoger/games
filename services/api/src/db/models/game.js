import mongoose from 'mongoose'

const GameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
})

export default mongoose.model('Game', GameSchema)
