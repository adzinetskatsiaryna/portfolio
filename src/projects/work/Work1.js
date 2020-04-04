import React from 'react';
import styles from './Work1.module.css'
import Button from "./button/Button";

function Work1 () {
  return (
    <div className={styles.work1}>
      <div className={styles.beckgraund}>
        <Button/>
      </div>
        <h3>Название проекта</h3>
        <p>Описание проекта</p>
    </div>
  );
}

export default Work1;
