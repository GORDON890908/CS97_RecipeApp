import React, { useEffect, useState } from "react";
import Comment from "./Comment.js"
import CommentForm from "./CommentForm.js"
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
                            <p style={{ margin: "10px" }}>Description: {recipe.description}</p>
                            <p style={{ margin: "10px" }}>Ingredients: {recipe.ingredients}</p>
                            <p style={{ margin: "10px" }}>Procedures: {recipe.procedures}</p>
                        </div>
                    )
                })}
            </div>
            <Comment CommentList={commentList}/>
            <CommentForm />
        </div >
    );
}

export default Recipe;