import { Link, BrowserRouter as Router } from 'react-router-dom';
import ReactDom from 'react-dom';
import RecipeDetail from './RecipeDetail.js'

import React from 'react';

//import content from 'content.js';


const Recipe = ({ key, title, calories, image, ingredients }) => {
    return (
        <div>
            <h1>
                <Link to={`/detail/${title}`}>{title}</Link>
            </h1>
            <img src={image} alt="" />
            {/* <p>{calories}</p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol> */}
        </div>
    );
}
export default Recipe;