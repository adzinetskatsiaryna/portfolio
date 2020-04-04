import React from 'react';
import styles from './Work2.module.css'
import Button from "./button/Button";

function Work2 () {
  return (
    <div className={styles.work2}>
      <div className={styles.beckgraund}>
        <Button/>
      </div>
        <h3>Название проекта</h3>
        <p>Описание проекта</p>
    </div>
  );
}

export default Work2;
