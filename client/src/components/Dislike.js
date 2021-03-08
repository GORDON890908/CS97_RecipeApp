const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const dislikeSchema = mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    recipeId: {
        type: Schema.Types.ObjectId,
        ref: "recipe"
    }
}, { timestamps: true })

const DisLike = mongoose.model("DisLike", dislikeSchema);

module.exports = { DisLike }