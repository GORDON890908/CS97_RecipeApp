import React from 'react'
import { withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import {Paper, makeStyles, createGenerateClassName, TableBody, TableRow, TableCell, Card, CardHeader, CardContent, Typography, Button, CardActions} from '@material-ui/core'
import useTable from '../components/components/useTable'


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
    }
}))

export function TableSample(props){

    const classes = useStyles()
    const [ingredients, setIngredients] = React.useState(props.recipeList)
    const{
        TblContainer
    }= useTable()

    return(
        <Paper className = {classes.pageContent}>
            <TblContainer>
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
                            //<Grid item xs={12} sm={6} key={i}>
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
                            //</Grid>
                        ))
                    }
                    </Grid>
                </TableBody>
            </TblContainer>
        </Paper>
    )

}


export default withRouter((TableSample))