import React from 'react'
import { Comment, Avatar, Input } from 'antd';

const { TextArea } = Input;

function SingleComment(props) {


    // const action = 
    return (
        <div>
            <Comment
                // action={action}
                author={props.comment.writer.name}
                avatar={
                    <Avatar
                        src={props.comment.writer.image}
                        alt="image"
                    />
                }
                content={
                    <p>

                    </p>
                }
            ></Comment>


            single SingleComment
        </div>
    )
}

export default SingleComment;