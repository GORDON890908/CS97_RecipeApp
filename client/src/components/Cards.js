import React from 'react';
import { FlatList } from 'react-native';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';

const useStyles = theme => ({
    root: {
        maxWidth: 'max',
    },
});

class IngredientResults extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ingredients: props.ingredientsArray,
            selectedIndex: 0,
        }
    }
  
    renderIngredients(){
        return this.state.ingredients.map(el => {
            return (<ListItem button 
            key={el.index}
            //selected = {this.state.selectedIndex===el.index} 
            >
                <div className = "arr" key = {el.index}>
                {el.chk.map(value=>(value ? 'yeet' : 'nope'))}
                </div>
            </ListItem>)
        })
    }

    renderRecipes(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    {this.props.recipeList.map((recipe, i) => (
                        <Grid item xs={12} sm={6} key={i}>
                            <Card>
                                <CardHeader
                                    title={recipe.recipeName}
                                    //subheader={date.substring(0,10)}
                                    subheader={recipe.createdAt}
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
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
  
    render(){
        return(
            <div>
            <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                Recipes
                </ListSubheader>
            }
            >
            {this.renderRecipes()}
            </List>
            </div>
        )
    }
}

export default withStyles(useStyles)(IngredientResults)