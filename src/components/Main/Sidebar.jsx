// src/components/Main/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <h2>Категории</h2>
      <ul style={styles.list}>
        <li><a href="#react" style={styles.link}>React</a></li>
        <li><a href="#javascript" style={styles.link}>JavaScript</a></li>
        <li><a href="#webdev" style={styles.link}>Web Development</a></li>
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '200px',
    marginRight: '20px'
  },
  list: {
    listStyleType: 'none',
    padding: 0
  },
  link: {
    textDecoration: 'none',
    color: '#333'
  }
};

export default Sidebar;
