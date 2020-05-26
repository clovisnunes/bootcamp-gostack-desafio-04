import React from 'react';

import Header from './components/Header';
import Comment from './components/Comment';
import Post from './components/Post';

import './styles.css';

const App = () => (
    <div className="App">
        <Header />
        <Post />
    </div>
);

export default App;