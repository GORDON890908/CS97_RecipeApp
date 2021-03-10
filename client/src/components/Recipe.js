import React, { useEffect, useState } from "react";
import Comment from "./Comment.js"
import style from "../css/detailPage.css";
import LikeDislikes from "./LikeDislike.js"

function Recipe() {
    const [recipe, setRecipe] = useState(null);
    const [comment, setComment] = useState("");
    const [commentList, setCommentList] = useState(null);

    const recipeDetail = {
        recipeName: "",
        createdAt: "",
        ingredient: {},
        procedures: {},
        review: [],
        userName: "",
        id: "",
    }

    const fetchRecipe = async () => {
        await fetch(`/recipe${window.location.search}`)
        .then(res => res.json())
        .then(data => {
            setRecipe(data);
            console.log(data)
        });
    }
  
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }
    
    const updateComment = (newComment) => {
        console.log(newComment)
        setCommentList(CommentList.concat(newComment));
    }
    
    // /////////////////////////Need to change this part to Comment.js/////////////////////////
    const handleComment = async() => {
        const info = {
            userName: localStorage.name,
            message: comment,
            recipeID: window.location.search.substring(4),
        }
        try{
            await fetch("/comment", {
                method: "POST",
                body: JSON.stringify(info),
                headers: {
                "Content-Type": "application/json",
                }
                }).then(res => {
                if (res.ok) {
                    console.log("Comment Success")
                }
                })
        }catch(err){
            console.log("Comment Fail");
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////

    const fetchComment = async() => {
        await fetch(`/comment${window.location.search}`)
        .then(res => res.json())
        .then(data => {
            setCommentList(data);
        });
    }
    
    useEffect(()=>{
        fetchRecipe();
        fetchComment();
      }, () => handleComment)

    return (

        <div>
            <div>
                {recipe && recipe.map((recipe, index) => {
                    return (
                        <div key={index} className="recipeDetail">
                            <h2 style={{ margin: "10px" }}>{(recipe.recipeName)} </h2>
                            <p style={{ paddingLeft: "10px" }}>Description: {recipe.description}</p>
                            {/* <img src="https://v1.nitrocdn.com/KQYMGOLIdXGmoAcyJsPOrQDKktgCbwtG/assets/static/optimized/rev-a960d32/wp-content/uploads/2016/03/Pressure-Cooker-Curry-IV.jpg" alt="apple" width="100%" height="50%" /> */}
                            <ol style={{ margin: "10px" }}>
                                {(recipe.ingredients.map(ingredient => (
                                    <li>{ingredient}</li>
                                )))}
                            </ol>
                            <p style={{ margin: "10px" }}>{recipe.procedures}</p>
                        </div>
                    )
                })}
            </div>

            <div style={{ paddingLeft: '450px' }}><LikeDislikes></LikeDislikes></div>
            {/* actions={<LikeDislikes> //recipe recipeId={recipeId} userId={localStorage.getItem('userId')} />} */}
            <Comment CommentList={CommentList} postId={Recipe.id} refreshFunction={updateComment} />

        </div >
    );
}

export default Recipe;