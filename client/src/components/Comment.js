import React, { useState } from 'react'
import { Button, Input } from 'antd';
import SingleComment from "./SingleComment.js"
// import axios from 'axios';
// import { userSelector } from 'react-redux';


const { TextArea } = Input;

function Comment(props) {

    const [Comment, setComment] = useState("");

    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    };

    const onSubmit = (e) => {

        e.preventDefault();



        setComment("") // after submit hit, set Comment back to empty
        props.refreshFunction(variables);

        // axios.post('/api/comment/saveComment', variables).then(response => {
        //     if (Response.data.success) {
        //         setComment = "";
        //         props.refreshFunction(response.data.result);
        //     }
        //     else
        //         alert("post failed");
        // });
    }
    const variables = {
        content: Comment,
        writer: "steven",
        postId: "1",
    };

    return (
        <div>
            <br />
            <h2>replies</h2>
            <hr />
            {console.log(props.CommentList)}

            {props.CommentList && props.CommentList.map((comment, index) => (
                <SingleComment
                    comment={comment}
                    author={variables.writer}
                    postId={variables.postId}
                    refreshFunction={props.refreshFunction} />

            ))
            }

            <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                <TextArea
                    style={{ width: "100%", borderRadius: "5px" }}
                    onChange={handleChange}
                    value={Comment}
                    placeholder="write some comments"
                />
                <br />
                <Button style={{ width: "20%", height: "52px" }} onClick={onSubmit}>Submit</Button>
            </form>
        </div >
    )
}
export default Comment;