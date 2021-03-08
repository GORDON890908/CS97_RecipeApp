import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useForm, Form } from './components/useForm';
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


export default function RecipeForm() {
    const history = useHistory();

    const{
        fieldValues,
        setFieldValues,
        handleInputChange,
    }=useForm(initialFieldValues)

    const createRecipe = async (info) => {
        try{
          await fetch("/dashboard", {
            method: "POST",
            body: JSON.stringify(info),
            headers: {
              "Content-Type": "application/json",
            }
            }).then(res => {
            if (res.ok) {
              console.log("Frond-End Post Recipe Success")
            }
          })
        }
        catch(err){
          console.log("Front-End Post Recipe Fail");
        }
      };

    return(
        <Form onsubmit = {e => createRecipe(fieldValues)}>
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
                        type = "submit"
                        text = "Submit"
                        onClick = {e => createRecipe(fieldValues)}
                        />
                    </div>
                </Grid>
                <Grid item x4 = {4}></Grid>
            </Grid>
        </Form>

    )
}

/*
                        <Controls.Button
                        color = "default"
                        size = "large"
                        type = "Rest"
                        text = "Reset"/>
*/