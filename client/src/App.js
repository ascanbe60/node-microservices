import React from 'react';
import CreatePost from './CreatePost.js';
import PostList from './PostList.js';

const App = () => (
  <div className="container">
    <h1>Create Post</h1>
    <CreatePost />
    <hr />
    <h1>Posts</h1>
    <PostList />
  </div>
);

export default App;
