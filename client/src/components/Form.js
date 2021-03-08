import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useForm } from './components/useForm';
import Controls from './components/controls/Controls';
import * as ingredientsArray from "./ingredient/ingredientsArray"

const initialFieldValues = {
    recipeName: '',
    description: '',
    ingredients: [],
    procedures: '',
    reviews:[],
    userName:localStorage.name,
}

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root':{ //& is a selector symobl, . is for all classes
            width: '80%'
            ,margin: theme.spacing(1)
        }
    }
}))

export default function RecipeForm(props) {
    const classes = useStyles();

    const{
        fieldValues,
        setFieldValues,
        handleInputChange,
    }=useForm(initialFieldValues)

    return(
        <form className = {classes.root}>
            <Grid container>
                <Grid item x4 = {4}>
                    <Controls.Input
                        name = "recipeName"
                        label='Recipe Name'
                        value={fieldValues.recipeName}
                        onChange= {handleInputChange}
                    />
                    <Controls.Input
                        name ="description"
                        label='Description'
                        value={fieldValues.description}
                        onChange= {handleInputChange}   
                    />
                    <Controls.Select
                        name = "ingredients"
                        label = "Ingredients Used"
                        value = {fieldValues.ingredients}
                        onChange = {handleInputChange}
                        options = {ingredientsArray.getIngredientsArray()}
                    
                    />
                    <Controls.Multiline
                        name = "procedures"
                        label = "Steps: "
                        value = {fieldValues.procedures}
                        onChange = {handleInputChange}
                    />
                    <div>
                        <Controls.Button
                        color = "primary"
                        size = "large"
                        text = "Submit"
                        onClick = {() => props.onCreateRecipe(fieldValues)}
                        />
                    </div>
                </Grid>
                <Grid item x4 = {4}></Grid>
            </Grid>
        </form>

    )
}

/*
                        <Controls.Button
                        color = "default"
                        size = "large"
                        type = "Rest"
                        text = "Reset"/>
*/