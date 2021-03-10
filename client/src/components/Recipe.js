import React, { useEffect, useState } from "react";
import Comment from "./Comment.js"
import style from "../css/detailPage.css";

function Recipe() {
    const [recipe, setRecipe] = useState(null);
    const [comment, setComment] = useState("");
    const [commentList, setCommentList] = useState(null);

    const fetchRecipe = async () => {
        await fetch(`/recipe${window.location.search}`)
        .then(res => res.json())
        .then(data => {
            setRecipe(data);
            console.log(data)
        });
    }
    
    const updateComment = (newComment) => {
        console.log(newComment)
        setCommentList(commentList.concat(newComment));
    }

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
    }, [])

    return (

        <div>
            <div>
                {recipe && recipe.map((recipe, index) => {
                    return (
                        <div key={index} className="recipeDetail">
                            <h2 style={{ margin: "10px" }}>{(recipe.recipeName)} </h2>
                            <p style={{ paddingLeft: "10px" }}>Description: {recipe.description}</p>
                            <ol style={{ margin: "10px" }}>
                                {(recipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                )))}
                            </ol>
                            <p style={{ margin: "10px" }}>{recipe.procedures}</p>
                        </div>
                    )
                })}
            </div>
            <Comment CommentList={commentList}/>
        </div >
    );
}

export default Recipe;