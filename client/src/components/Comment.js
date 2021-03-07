import React, { useState } from 'react'
import { Button, Input } from 'antd';
import SingleComment from "./SingleComment.js"
// import axios from 'axios';
// import { userSelector } from 'react-redux';


const { TextArea } = Input;

function Comment(props) {
    const user = {
        userId: "1",
        userName: "Steven",
    };

    const [Comment, setComment] = useState("");

    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };

    const variables = {
        content: Comment,
        writer: user.userId,
        postId: props.postId,
    };

    // axios.post('/api/comment/saveComment', variables).then(response => {
    //     if (Response.data.success) {
    //         setComment = "";
    //         props.refreshFunction(response.data.result);
    //     }
    //     else
    //         alert("post failed");
    // });


    return (
        <div>
            <br />
            <p>replies</p>
            <hr />
            {console.log(props.CommentList)}
            {props.CommentList && props.CommentList.map((comment, index) => (
                <React.Fragment>
                    <SingleComment comment={comment} postId={props.postId} refreshFunction={props.refreshFunction} />
                </React.Fragment>

            ))}
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
        </div>
    )
}
export default Comment;