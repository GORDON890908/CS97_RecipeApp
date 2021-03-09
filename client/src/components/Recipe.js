import React, { useState, useEffect } from 'react';

function Recipe() {
    const [recipe, setRecipe] = useState(null);
    const [comment, setComment] = useState("");
    const [commentList, setCommentList] = useState(null);

    const fetchRecipe = async() => {
        await fetch(`/recipe${window.location.search}`)
        .then(res => res.json())
        .then(data => {
            setRecipe(data);
        });
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

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

    const fetchComment = async() => {
        await fetch(`/comment${window.location.search}`)
        .then(res => res.json())
        .then(data => {
            setCommentList(data);
        });
    }

    useEffect(()=>{
        fetchComment();
      }, () => handleComment)

    return (
        <div>
        <div className="text-center">
            <h1>Recipe page</h1>
            <div>
                {recipe && recipe.map((recipe, index) => {
                    return (
                        <div key = {index}>
                            <p>Recipe {recipe.recipeName}</p>
                            <p>Description: {recipe.description}</p>
                        </div>
                    )
                })}
            </div>
            <button onClick={fetchRecipe}> fetch </button>
            <div>
                <input value={comment} onChange={handleCommentChange}/>
                <button onClick={() => handleComment()}> send </button>
            </div>
            <div>
                {commentList && commentList.map((comment, index) => {
                    return (
                        <div key = {index}>
                            <p>{comment.userName}</p>
                            <p>{comment.message}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    );
}

export default Recipe;