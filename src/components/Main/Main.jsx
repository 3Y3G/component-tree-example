// src/components/Main/Main.js
import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

class Main extends Component {
  render() {
    const { posts } = this.props;
    return (
      <main style={styles.main}>
        <Sidebar />
        <Content posts={posts} />
      </main>
    );
  }
}

const styles = {
  main: {
    display: 'flex',
    padding: '20px'
  }
};

export default Main;
