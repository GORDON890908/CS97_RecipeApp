import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
});

function Comment(props) {
    const classes = useStyles();
    return (
        <div>
            <br />
            <h2 style={{ paddingLeft: 10 }}>Comments</h2>
            <hr />
            {console.log(props.CommentList)}

            {props.CommentList && props.CommentList.map((comment, index) => (
                <Card className={classes.root} key={index}>
                    <CardContent>
                    <Typography variant="subtitle1" color="textSecondary">
                        {comment.userName} wrote at {comment.createdAt.substring(0, 10)}
                    </Typography>
                    <Typography variant="body1" component="p">
                        {comment.message}
                    </Typography>
                    </CardContent>
                </Card>
            ))}
        </div >
    )
}
export default Comment;