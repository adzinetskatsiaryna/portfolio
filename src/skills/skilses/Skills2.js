import React from 'react';
import styles from './Skills2.module.css'


function Skills2() {
    return (
        <div className={styles.skills2}>
            <div className={styles.icon}><img src="" alt='icon'/></div>
            <p className={styles.title}>HTML & CSS</p>
            <div className={styles.description}>
                <p>Подробное описание навыка</p>
            </div>
        </div>
    );
}

export default Skills2;
