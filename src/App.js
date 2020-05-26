import React from 'react';

import Header from './components/Header';
import Comment from './components/Comment';
import Post from './components/Post';
import PostList from './components/PostList';

import './styles.css';


const App = () => (
    <div className="App">
        <Header />
        <PostList />
    </div>
);

export default App;