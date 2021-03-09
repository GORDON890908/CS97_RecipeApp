import React, { useState } from 'react';
import Comment from "./Comment.js"
function Recipe() {
    const [recipe, setRecipe] = useState(null);

    const [CommentList, setCommentList] = useState([]);

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
            });
    }

    return (
        <div>
            <div className="recipeDetail">
                <h1>title of the recipe`</h1>
                <img src="https://www.w3schools.com/images/picture.jpg" alt="apple" />
                <ol>
                    <li>buy apple</li>
                    <li>cut apple</li>
                    <li>eat it</li>
                    {/* <ol>
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
            </ol> */}
                </ol>

            </div>
            {/* <div style={{ margin: '10px', paddingLeft: '25px' }}><LikeDislikes></LikeDislikes></div> */}
            {/* actions={<LikeDislikes> //recipe recipeId={recipeId} userId={localStorage.getItem('userId')} />} */}
            <Comment CommentList={CommentList} postId={Recipe.id} refreshFunction={updateComment} />

        </div>


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