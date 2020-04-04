import React from 'react';
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
          <h2>Одинец Екатерина Александровна</h2>
          <div className={styles.socialNetwork}>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Linkedin</a>
          </div>
        </div>
    </div>
  );
}

export default  Footer;
