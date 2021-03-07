import React, {useState, useEffect} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useForm, Form } from './components/useForm';
import Controls from './components/controls/Controls';
import * as ingredientsArray from "./ingredient/ingredientsArray"



const initialFieldValues = {
    id: 0,
    dishName: '',
    tags: "",
    ingredients: [],
    steps: "",
}


export default function RecipeForm() {
    const{
        fieldValues,
        setFieldValues,
        handleInputChange,
    }=useForm(initialFieldValues)

    return(
        <Form>
            <Grid container>
                <Grid item x4 = {4}>
                    <Controls.Input
                        name = "dishName"
                        label='Dish Name'
                        value={fieldValues.dishName}
                        onChange= {handleInputChange}
                    />
                    <Controls.Input
                        name ="tags"
                        label='User Tags'
                        value={fieldValues.tags}
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
                        name = "steps"
                        label = "Steps: "
                        value = {fieldValues.steps}
                        onChange = {handleInputChange}
                    />
                    <div>
                        <Controls.Button
                        color = "primary"
                        size = "large"
                        type = "Submit"
                        text = "Submit"/>
                        <Controls.Button
                        color = "default"
                        size = "large"
                        type = "Rest"
                        text = "Reset"/>
                    </div>
                </Grid>
                <Grid item x4 = {4}></Grid>
            </Grid>
        </Form>

    )
}