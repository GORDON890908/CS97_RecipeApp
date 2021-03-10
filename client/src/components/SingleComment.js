import React from 'react'
import { Comment, Avatar, Input } from 'antd';

const { TextArea } = Input;

function SingleComment(props) {

    console.log(props.comment)
    // const action = 
    return (
        <div>
            <Comment className="card"
                // action={action}
                avatar={
                    <img className="image" src={"https://www.w3schools.com/images/picture.jpg"} alt="image" />
                    //props.comment.writer.image} alt="image" />
                }
                author={<h2 className="header">{props.comment.writer}</h2>}

                content={<div class="container">{props.comment.content} </div>}
            >
            </Comment>
        </div >

    )
}

export default SingleComment;