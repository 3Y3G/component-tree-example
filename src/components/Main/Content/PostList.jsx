// src/components/Main/Content/PostList.js
import React, { Component } from 'react';
import PostItem from './PostList/PostItem';

class PostList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        {posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
