const express = require('express');
const router = express.Router();

const { Like } = require("../components/Like.js");
const { Dislike } = require("../components/Dislike.js");

// ///////////////////

// Like and Dislike

// //////////////////

router.pose("/getLikes", (req, res) => {

    let variable = {}

    variable = { recipeId: req.body.recipeId };

    Like.find(variable)
        .exec((err, likes) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({ success: true, likes })
        })

})

router.pose("/getDislikes", (req, res) => {

    let variable = {}

    variable = { recipeId: req.body.recipeId };

    Like.find(variable)
        .exec((err, dislikes) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({ success: true, dislikes })
        })

})