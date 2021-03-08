import React from 'react';

function Recipe() {
    console.log(window.location.search);

    return (
        <div>
        <div className="text-center">
            <h1>Recipe page</h1>
            <button onClick={fetchRecipe}> fetch </button>
        </div>
        </div>
    );
}

export default Recipe;