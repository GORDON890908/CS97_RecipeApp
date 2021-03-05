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
  },
  procedures: {
    type: Array,
  },
  notes:{
    type: String,
  },
  reviews:{
    type: Array,
  },
  userName:{
    type: String,
    required: true,
  },
  tags:{
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Recipe', RecipeSchema)