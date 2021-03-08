import React, { useState, useEffect } from 'react';
import Recipe from "./recipes.js";
import App from "./search-bar.js";
import Comment from "./Comment.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LikeDislikes from './LikeDislike.js'

function Item() {

    /////// getting recipe from api
    // axios.post('/api/recipe/getRecipe', videoVariable)
    //     .then(response => {
    //         if (response.data.success) {
    //             console.log(response.data.video)
    //             setRecipe(response.data.recipe)
    //         }
    //         else
    //             alert("fail to get recipe");
    //     })

    ////// getting comment list form api
    // axios.post('/api/comment/getComments', commentVariable)
    //     .then(response => {
    //         if (response.data.success) {
    //             console.log(response.data.comments)
    //             setCommentList(response.data.comments)
    //         }
    //         else
    //             alert("fail to get comments");
    //     })

    const [CommentList, setCommentList] = useState([]);

    const updateComment = (newComment) => {
        setCommentList(CommentList.concat(newComment));
    }


    return (
        <div>
            <h1>detail page</h1>
            <h2>title of the recipe`</h2>
            <img src="./apple.jpg" alt="apple" />
            <ol>
                <li>buy apple</li>
                <li>cut apple</li>
                <li>eat it</li>
            </ol>
            <LikeDislikes></LikeDislikes>
            {/* actions={<LikeDislikes> //recipe recipeId={recipeId} userId={localStorage.getItem('userId')} />} */}
            <Comment CommentList={CommentList} postId={Recipe.id} refreshFunction={updateComment} />
        </div>



    );

}

export default Item;