import React, { useEffect, useState } from 'react';
import { Tooltip } from 'antd';

import { Icon } from '@ant-design/compatible';
//import Axios from "axios";
import { LikeOutlined } from '@ant-design/icons';

function LikeDislikes(props) {

    const [Likes, setLikes] = useState(0);
    const [Dislikes, setDislikes] = useState(0);
    const [LikeAction, setLikesAction] = useState(null);
    const [DislikeAction, setDislikeAction] = useState(null);


    const variable = {};
    if (props.recipe) {
        variable = { recipeId: props.recipeId, userId: props.userId };
    }

    // useEffect(() => {
    //     Axios.post("/api/like/getLikes", variable)
    //         .then(response => {
    //             if (response.data.success) {
    //                 // how many likes does this video have
    //                 setLikes(response.data.likes.length);
    //             }
    //             else {
    //                 alert("Failed to get likes data");

    //             }
    //         })

    //     Axios.post("/api/like/getDislikes", variable)
    //         .then(response => {
    //             if (response.data.success) {
    //                 // how many likes does this video have
    //                 setDislikes(response.data.Dislikes.length);
    //             }
    //             else {
    //                 alert("Failed to get Dislikes data");

    //             }
    //         })
    // }, [])

    return (
        <React.Fragment>
            <span key="comment-basic-like">
                <Tooltip tile="Like">
                    <Icon type="like"
                        theme={LikeAction === 'liked' ? 'filled' : 'outlined'}
                        onClick />
                </Tooltip>
                <span style={{ paddingLeft: '8px', cursor: 'auto' }}>{Likes}</span>
            </span >&nbsp;&nbsp;
            <span key="comment-basic-dislike">
                <Tooltip tile="Dislike">
                    <Icon type="dislike"
                        theme={DislikeAction === 'liked' ? 'filled' : 'outlined'}
                        //theme = {LikeAction === 'liked' ? 'filedd'}
                        onClick />
                </Tooltip>
                <span style={{ paddingLeft: '8px', cursor: 'auto' }}>{Dislikes}</span>
            </span >&nbsp;&nbsp;
        </React.Fragment>

    )
}
export default LikeDislikes;