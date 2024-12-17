// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>My Blog</h1>
      <nav>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#about" style={styles.link}>About</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '20px',
    color: 'white',
    textAlign: 'center'
  },
  link: {
    margin: '0 10px',
    color: 'white',
    textDecoration: 'none'
  }
};

export default Header;
