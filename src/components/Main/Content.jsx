// src/components/Main/Content.js
import React, { Component } from 'react';
import PostList from './Content/PostList';

class Content extends Component {
  render() {
    const { posts } = this.props;
    return (
      <section style={styles.content}>
        <PostList posts={posts} />
      </section>
    );
  }
}

const styles = {
  content: {
    flex: 1
  }
};

export default Content;
