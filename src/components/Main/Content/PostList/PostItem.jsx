// src/components/Main/Content/PostList/PostItem.js
import React from 'react';

const PostItem = (props) => {
  const { title, description } = props.post;
  return (
    <article style={styles.article}>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

const styles = {
  article: {
    border: '1px solid #ddd',
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#fafafa'
  }
};

export default PostItem;
