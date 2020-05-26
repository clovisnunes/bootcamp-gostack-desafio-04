import React from 'react';

import Comment from '../Comment';

import './styles.css';


const Post = (props) => (
    <div id="post">
        <div id="author">
            <img id="avatar" src={props.data.author.avatar} />
            <div id="sideimg">
                <div id="author-name">{props.data.author.name}</div>
                <div id="date-post">{props.data.date}</div>
            </div>
        </div>
        <div id="content-area">{props.data.content}</div>

        { props.data.comments.map(comment => <Comment key={comment.id} data={comment} />) }

    </div>
);

export default Post;