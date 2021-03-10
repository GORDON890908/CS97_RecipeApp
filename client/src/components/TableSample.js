import React from 'react'
import { withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import {Paper, makeStyles, createGenerateClassName, TableBody, TableRow, TableCell, Card, CardHeader, CardContent, Typography, Button, CardActions, InputAdornment, Toolbar, TextField} from '@material-ui/core'
import useTable from '../components/components/useTable'
import Controls from './components/controls/Controls';
import { Search } from '@material-ui/icons';
import Autocomplete from '@material-ui/lab/Autocomplete';


const useStyles = makeStyles(theme =>({

    table: {
        marginTop: theme.spacing(3),
        '& tbody td':{
            fontWEight: '300'
        },
    },
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput:{
        width: '75%'
    },
    searchContainer:{
        display: 'flex',
        
    }
}))

export function TableSample(props){

    const classes = useStyles()
    const [ingredients, setIngredients] = React.useState(props.recipeList)
    const [filter, setFilter] = React.useState("")
    const handleSearchChange = e => {
        
        console.log(e.target.textContent)
        setFilter(e.target.textContent)
        console.log(filter)
    }
    const handleChange = (e) => {
        console.log(e.target.value)
        setFilter(e.target.value)
    }
    const{
        TblContainer, TblPagination, recordsAfterPagingAndSorting
    }= useTable()
    return(
        <Paper className = {classes.pageContent}>
            <Toolbar>
                <Controls.Input
                    label = "Search Ingredients"
                    className = {classes.searchInput}
                    InputProps = {{
                        startAdornment: (<InputAdornment position="start">
                            <Search />
                        </InputAdornment>)
                    }}
                    onChange = {handleChange}
                />   
                {/* <Autocomplete
                    
                    id="tags-standard"
                    className = {classes.searchInput}
                    options={props.recipeList}
                    getOptionLabel={(option) => option.recipeName}
                    onChange = {handleSearchChange}
                    //defaultValue={[top100Films[13]]}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Find Recipes with Selected Ingredients!"
                        placeholder="Select an Ingredient:"
                    />
                    )}
                /> */}
            </Toolbar>
            <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
            >
                {props.recipeList.map((recipe, i) => (
                        recipe.recipeName.toLowerCase().includes(filter) &&
                        <Grid item xs={12} sm={6} key={i}>
                            <Card>
                                <CardHeader
                                    title={recipe.recipeName}
                                    subheader={(recipe.createdAt).substring(0, 10)}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {recipe.description}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {recipe._id}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => {console.log(recipe._id); props.history.push(`/Recipe?id=${recipe._id}`)}} size="small">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
            {/* <TblContainer>
                <TableBody>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    {
                        props.recipeList.map((item,i) =>(
                            <Grid item xs={12} sm={6} key={i}>
                            <TableRow key = {item._id}>
                                <TableCell>
                                <Card>
                                    <CardHeader
                                        title={item.recipeName}
                                        subheader={(item.createdAt).substring(0, 10)}
                                    />
                                    <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.description}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item._id}
                                    </Typography>
                                    </CardContent>
                                    <CardActions>
                                    <Button onClick={() => {console.log(item._id); props.history.push(`/Recipe?id=${item._id}`)}} size="small">
                                        Learn More
                                    </Button>
                                </CardActions>
                                </Card>


                                </TableCell>
                            </TableRow>
                            </Grid>
                        ))
                    }
                    </Grid>
                </TableBody>
            </TblContainer>
            <TblPagination/> */}
        </Paper>
    )

}


export default withRouter((TableSample))