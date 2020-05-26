import React from 'react';

import './styles.css';

const Comment = (props) => (
    <div id="comment-area">
        {console.log(props)}
        <img id="avatar-com" src={props.data.author.avatar} />
        <div id="comment">
            <div id="author-com">
                {props.data.author.name}
            </div>
            &nbsp;{props.data.content}
        </div>
    </div>
);

export default Comment;