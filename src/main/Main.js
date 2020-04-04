import React from 'react';
import styles from './Main.module.css'

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
          <div className={styles.content}>
            <p>Привет</p>
            <p>Меня зовут Одинец Екатерина</p>
            <p>Я начинающий front-end разработчик</p>
          </div>
        <div className={styles.avatar}><img src="" alt="avatar"/></div>
      </div>
    </div>
  );
}

export default  Main;
