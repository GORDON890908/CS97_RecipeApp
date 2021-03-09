import React, { useEffect, useState } from "react";
import Comment from "./Comment.js"
import style from "../css/detailPage.css";

function Recipe() {

    const recipeDetail = {
        recipeName: "",
        createdAt: "",
        ingredient: {},
        procedures: {},
        review: [],
        userName: "",
        id: "",
    }
    const [recipe, setRecipe] = useState([]);

    const [CommentList, setCommentList] = useState([]);

    useEffect(() => {
        fetchRecipe();
    }, []);

    const updateComment = (newComment) => {
        console.log(newComment)
        setCommentList(CommentList.concat(newComment));
    }

    const fetchRecipe = async () => {
        await fetch(`/recipe${window.location.search}`)
            .then(res => res.json())
            .then(data => {
                setRecipe(data);
                console.log(data)
                // console.log(recipe[0].recipeName)
                // recipeDetail.recipeName = data[0].recipeName
                // console.log(recipeDetail.recipeName)
            });

    }
    return (

        <div>
            <div >
                {recipe && recipe.map((recipe, index) => {
                    return (
                        <div key={index} className="recipeDetail">
                            <h2 style={{ margin: "10px" }}>{(recipe.recipeName)} </h2>
                            <p style={{ paddingLeft: "10px" }}>Description: {recipe.description}</p>
                            <img src="https://v1.nitrocdn.com/KQYMGOLIdXGmoAcyJsPOrQDKktgCbwtG/assets/static/optimized/rev-a960d32/wp-content/uploads/2016/03/Pressure-Cooker-Curry-IV.jpg" alt="apple" width="100%" height="50%" />
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

            {/* <div style={{ margin: '10px', paddingLeft: '25px' }}><LikeDislikes></LikeDislikes></div> */}
            {/* actions={<LikeDislikes> //recipe recipeId={recipeId} userId={localStorage.getItem('userId')} />} */}
            <Comment CommentList={CommentList} postId={Recipe.id} refreshFunction={updateComment} />

        </div >


        // <div>
        //     <div className="text-center">
        //         <h1>Recipe page</h1>
        //         <div>
        //             {recipe && recipe.map((recipe, index) => {
        //                 console.log(recipe)
        //                 return (
        //                     <div key={index}>
        //                         <p>Recipe Name: {recipe.recipeName}</p>
        //                         <p>Description: {recipe.description}</p>
        //                     </div>
        //                 )
        //             })}
        //         </div>
        //         <button onClick={fetchRecipe}> fetch </button>
        //         <div>
        //             Commectingd adlakdljljljkasd
        //     </div>
        //     </div>
        // </div>
    );
}

export default Recipe;