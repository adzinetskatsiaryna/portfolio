import React from 'react';
import styles from './Skills1.module.css'


function Skills1() {
  return (
    <div className={styles.skills1}>
        <div className={styles.icon}><img src="" alt='icon'/></div>
        <p className={styles.title}>React</p>
        <div className={styles.description}>
            <p>Подробное описание навыка</p>
        </div>
    </div>
  );
}

export default Skills1;
