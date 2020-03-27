import React from 'react';
import styles from './styles.css';

export const Header = ({ title }) => (
  <header className={styles.content}>
      <h1>{ title }</h1>
  </header>
)