import {useState} from 'react';
import { withRouter } from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {InputAdornment, Toolbar} from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
import Control from '../components/components/controls/Controls'
import Controls from '../components/components/controls/Controls';
import {Search} from '@material-ui/icons';

const useStyles = theme => ({
    root: {
        maxWidth: 'max',
    },
});
const handleClick = (value, props) =>{
    console.log(value._id)
    props.history.push(`/Recipe?id=${value._id}`)
}

const useStyless = makeStyles(theme =>({
    searchInput:{
        width: '75%'
    }
}))
export function IngredientsResult(props){
    const classes = props
    const classesInput = useStyless
    const recipeList = props.recipeList
    const [filterFn, setFilterFn] = useState({fn: items => {return items}})

    const handleSearch = e => {
        let target = e.target
        setFilterFn({
            fn: items =>{
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.recipeName.toLowerCase.includes(target.value))
            }
        })
    }

    return(
        <div className ={classes.root}>
            <Toolbar>
                <Controls.Input
                    label = "Search Ingredients"
                    className = {classesInput.searchInput}
                    InputProps = {{
                        startAdornment: (<InputAdornment position="start">
                            <Search />
                        </InputAdornment>)
                    }}
                    onChange = {handleSearch}
                />
                
            </Toolbar>
            <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
            >
                {recipeList.map((recipe, i) => (
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

        </div>


    )
}

// export class IngredientsResult extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//         this.state={
//             ingredients: props.ingredientsArray,
//             selectedIndex: 0,
//         }
//     }

//     handleClick(value) {
//         console.log(value._id);
//         this.props.history.push(`/Recipe?id=${value._id}`);
//     }

//     renderRecipes(){
//         const { classes } = this.props;

//         return (
//             <div className={classes.root}>
//                 <Grid
//                     container
//                     spacing={2}
//                     direction="row"
//                     justify="flex-start"
//                     alignItems="flex-start"
//                 >
//                     {this.props.recipeList.map((recipe, i) => (
//                         <Grid item xs={12} sm={6} key={i}>
//                             <Card>
//                                 <CardHeader
//                                     title={recipe.recipeName}
//                                     subheader={(recipe.createdAt).substring(0, 10)}
//                                 />
//                                 <CardContent>
//                                     <Typography variant="body2" color="textSecondary" component="p">
//                                         {recipe.description}
//                                     </Typography>
//                                     <Typography variant="body2" color="textSecondary" component="p">
//                                         {recipe._id}
//                                     </Typography>
//                                 </CardContent>
//                                 <CardActions>
//                                     <Button onClick={() => this.handleClick(recipe)} size="small">
//                                         Learn More
//                                     </Button>
//                                 </CardActions>
//                             </Card>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </div>
//         )
//     }
  
//     render(){
//         return(
//             <div>
//             <List
//             component="nav"
//             aria-labelledby="nested-list-subheader"
//             subheader={
//                 <ListSubheader component="div" id="nested-list-subheader">
//                     Recipes
//                 </ListSubheader>
//             }
//             >
//                 {this.renderRecipes()}
//             </List>
//             </div>
//         )
//     }
// }

export default withRouter(withStyles(useStyles)(IngredientsResult))
