import React, { useState } from 'react';

function Recipe() {
    const [recipe, setRecipe] = useState(null);

    const fetchRecipe = async() => {
        await fetch(`/recipe${window.location.search}`)
        .then(res => res.json())
        .then(data => {
            setRecipe(data);
        });
    }

    return (
        <div>
        <div className="text-center">
            <h1>Recipe page</h1>
            <div>
                {recipe && recipe.map((recipe, index) => {
                    console.log(recipe)
                    return (
                        <div key = {index}>
                            <p>Recipe Name: {recipe.recipeName}</p>
                            <p>Description: {recipe.description}</p>
                        </div>
                    )
                })}
            </div>
            <button onClick={fetchRecipe}> fetch </button>
            <div>
                Commecting
            </div>
        </div>
        </div>
    );
}

export default Recipe;