import React from 'react';

import './styles.css';

const com =  {
    id: 1,
    author: {
      name: "Diego Fernandes",
      avatar: "https://pickaface.net/gallery/avatar/ChloeBannink55d5b309e9a10.png"
    },
    content: "Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Cevadis im ampola pa arma uma pindureta. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose."
};

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