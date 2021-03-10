import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = theme => ({
    root: {
        maxWidth: 'max',
    },
});

class CommentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.getDefaultState();
    }
    
    getDefaultState = () => {
        return { comment: ''};
    }

    submit = () => {
        console.log(this.state.comment)
        this.setState(this.getDefaultState())
    }

    render() {
        const { classes } = this.props;
        
        return (
            <div className={classes.root} >
                <br />
                <h2 style={{ paddingLeft: 10 }}>Leave a comment!</h2>
                <form noValidate autoComplete="off">
                    <div>
                        <TextField
                            value={this.state.comment}
                            id="outlined-multiline-static"
                            label="Comment"
                            fullWidth
                            multiline
                            rows={4}
                            variant="outlined"
                            onChange={(e)=>{this.setState({comment: e.target.value})}}
                        />
                        <Button variant="contained" color="primary" onClick={() => this.submit()}>Submit</Button>
                    </div>
                </form>
            </div >
        )
    }
}

export default withStyles(useStyles)(CommentForm)