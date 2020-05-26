import React from 'react';

import Comment from '../Comment';

import './styles.css';

const postex = {
    id: 1,
    author: {
      name: "Julio Alcantara",
      avatar: "https://pickaface.net/gallery/avatar/ChloeBannink55d5b309e9a10.png"
    },
    date: "04 Jun 2019",
    content: "Interagi no mé, cursus quis, vehicula ac nisi. Delegadis gente finis, bibendum egestas augue arcu ut est. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.",
    comments: [
      {
        id: 1,
        author: {
          name: "Diego Fernandes",
          avatar: "https://pickaface.net/gallery/avatar/JohnBoley54ab86c9c3327.png"
        },
        content: "Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Cevadis im ampola pa arma uma pindureta. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose."
      },
      {
        id: 2,
        author: {
          name: "Pablo Fernandes",
          avatar: "https://pickaface.net/gallery/avatar/JohnBoley54ab86c9c3327.png"
        },
        content: "Mussum Ipsum, cacilds vidis litro abertis."
      }
    ]
};

const Post = () => (
    <div id="post">
        <div id="author">
            <img id="avatar" src={postex.author.avatar} />
            <div id="sideimg">
                <div id="author-name">{postex.author.name}</div>
                <div id="date-post">{postex.date}</div>
            </div>
        </div>
        <div id="content-area">{postex.content}</div>

        { postex.comments.map(comment => <Comment key={comment.id} data={comment} />) }

    </div>
);

export default Post;