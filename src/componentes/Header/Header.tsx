import React from 'react'
import styles from './style.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <img src="./images/dado.png" alt="Icone do dado" />
      </nav>
      <ul>
        <li><h1>Sorteador de</h1></li>
        <li><h2>Amigo Secreto</h2></li>
      </ul>
    </header>
  );
};

export default Header
