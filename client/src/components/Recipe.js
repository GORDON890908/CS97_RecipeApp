import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

import Comment from "./Comment.js"
import CommentForm from "./CommentForm.js"

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
});

function Recipe() {
    const [recipe, setRecipe] = useState(null);
    const [commentList, setCommentList] = useState(null);
    const classes = useStyles();

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
                {recipe && recipe.map((recipe, index) => (
                    <Card className={classes.root} key={index}>
                        <CardHeader
                            title={recipe.recipeName}
                            subheader={"by " + recipe.userName + ", " + recipe.createdAt.substring(0, 10)}
                        />
                        <CardContent>
                            <Typography variant="body1" component="p">
                                Ingredients: {recipe.ingredients}
                            </Typography>
                            <Typography variant="body1" component="p">
                                Procedures: <br />
                                {recipe.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <Comment CommentList={commentList}/>
            <CommentForm />
        </div >
    );
}

export default Recipe;