const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  ingredients:{
    type: Array,
    required: true,
  },
  procedures: {
    type: String,
    required: true,
  },
  userName:{
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Recipe', RecipeSchema)